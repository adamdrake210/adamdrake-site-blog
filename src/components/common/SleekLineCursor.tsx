import { useEffect, useRef } from 'react';

type SleekLineCursorProps = {
  friction?: number;
  trails?: number;
  size?: number;
  dampening?: number;
  tension?: number;
};

class Wave {
  phase: number;
  offset: number;
  frequency: number;
  amplitude: number;

  constructor(e: Partial<Wave> = {}) {
    this.phase = e.phase || 0;
    this.offset = e.offset || 0;
    this.frequency = e.frequency || 0.001;
    this.amplitude = e.amplitude || 1;
  }

  update() {
    this.phase += this.frequency;
    return this.offset + Math.sin(this.phase) * this.amplitude;
  }
}

class Node {
  x: number;
  y: number;
  vx: number;
  vy: number;

  constructor() {
    this.x = 0;
    this.y = 0;
    this.vx = 0;
    this.vy = 0;
  }
}

class Line {
  spring: number;
  friction: number;
  nodes: Node[];

  constructor(
    e: { spring: number },
    pos: { x: number; y: number },
    friction: number,
    size: number,
  ) {
    this.spring = e.spring + 0.1 * Math.random() - 0.05;
    this.friction = friction;
    this.nodes = [];
    for (let i = 0; i < size; i++) {
      const node = new Node();
      node.x = pos.x;
      node.y = pos.y;
      this.nodes.push(node);
    }
  }

  update(pos: { x: number; y: number }, dampening: number, tension: number) {
    let spring = this.spring;
    let node = this.nodes[0];

    node.vx += (pos.x - node.x) * spring;
    node.vy += (pos.y - node.y) * spring;

    for (let i = 0; i < this.nodes.length; i++) {
      node = this.nodes[i];

      if (i > 0) {
        const prev = this.nodes[i - 1];
        node.vx += (prev.x - node.x) * spring;
        node.vy += (prev.y - node.y) * spring;
        node.vx += prev.vx * dampening;
        node.vy += prev.vy * dampening;
      }

      node.vx *= this.friction;
      node.vy *= this.friction;
      node.x += node.vx;
      node.y += node.vy;
      spring *= tension;
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    let x = this.nodes[0].x;
    let y = this.nodes[0].y;

    ctx.beginPath();
    ctx.moveTo(x, y);

    for (let i = 1; i < this.nodes.length - 2; i++) {
      const curr = this.nodes[i];
      const next = this.nodes[i + 1];
      x = (curr.x + next.x) * 0.5;
      y = (curr.y + next.y) * 0.5;
      ctx.quadraticCurveTo(curr.x, curr.y, x, y);
    }

    const secondLast = this.nodes[this.nodes.length - 2];
    const last = this.nodes[this.nodes.length - 1];
    ctx.quadraticCurveTo(secondLast.x, secondLast.y, last.x, last.y);
    ctx.stroke();
    ctx.closePath();
  }
}

export const SleekLineCursor = ({
  friction = 0.5,
  trails = 20,
  size = 50,
  dampening = 0.25,
  tension = 0.98,
}: SleekLineCursorProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const posRef = useRef({ x: 0, y: 0 });
  const linesRef = useRef<Line[]>([]);
  const waveRef = useRef<Wave | null>(null);
  const animationRef = useRef<number>(0);
  const runningRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
    };

    const initLines = () => {
      linesRef.current = [];
      for (let i = 0; i < trails; i++) {
        linesRef.current.push(
          new Line(
            { spring: 0.45 + (i / trails) * 0.025 },
            posRef.current,
            1 - friction + (i / trails) * friction * 0.025,
            size,
          ),
        );
      }
    };

    const render = () => {
      if (!ctx || !runningRef.current) return;

      ctx.globalCompositeOperation = 'source-over';
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = 'lighter';
      ctx.strokeStyle = `hsla(${Math.round(
        waveRef.current?.update() || 0,
      )}, 90%, 50%, 0.25)`;
      ctx.lineWidth = 1;

      for (const line of linesRef.current) {
        line.update(posRef.current, dampening, tension);
        line.draw(ctx);
      }

      animationRef.current = requestAnimationFrame(render);
    };

    const handleMouseMove = (e: MouseEvent | TouchEvent) => {
      if ('touches' in e) {
        posRef.current.x = e.touches[0].pageX;
        posRef.current.y = e.touches[0].pageY;
      } else {
        posRef.current.x = e.clientX;
        posRef.current.y = e.clientY;
      }

      if (!runningRef.current) {
        runningRef.current = true;
        initLines();
        render();
      }
    };

    const handleMouseLeave = () => {
      runningRef.current = false;
      cancelAnimationFrame(animationRef.current);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    };

    const handleFocus = () => {
      if (!runningRef.current) {
        runningRef.current = true;
        render();
      }
    };

    const handleBlur = () => {
      runningRef.current = false;
      cancelAnimationFrame(animationRef.current);
    };

    // Initialize wave for color cycling
    waveRef.current = new Wave({
      phase: Math.random() * Math.PI * 2,
      amplitude: 85,
      frequency: 0.0015,
      offset: 285,
    });

    resizeCanvas();

    // Event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('touchmove', handleMouseMove, { passive: true });
    document.addEventListener('touchstart', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('focus', handleFocus);
    window.addEventListener('blur', handleBlur);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('touchmove', handleMouseMove);
      document.removeEventListener('touchstart', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('focus', handleFocus);
      window.removeEventListener('blur', handleBlur);
      cancelAnimationFrame(animationRef.current);
    };
  }, [friction, trails, size, dampening, tension]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 9999,
      }}
    />
  );
};

import { useEffect, useRef } from 'react';

type Particle = {
  x: number;
  y: number;
  size: number;
  velocityX: number;
  velocityY: number;
  opacity: number;
  phase: number;
};

function randomBetween(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

type Props = {
  background?: string;
  particleColor?: string;
  minSize?: number;
  maxSize?: number;
  speed?: number;
  particleDensity?: number;
};

export const SparklesBackground = ({
  background = 'transparent',
  particleColor = '#000000',
  minSize = 1,
  maxSize = 5,
  speed = 5,
  particleDensity = 180,
}: Props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: Particle[] = [];
    let animationId: number;

    // handle the high-DPI displays
    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < particleDensity; i++) {
        particles.push({
          x: randomBetween(0, window.innerWidth),
          y: randomBetween(0, window.innerHeight),
          size: randomBetween(minSize, maxSize),
          velocityX: randomBetween(-speed, speed) * 0.1,
          velocityY: randomBetween(-speed, speed) * 0.1,
          opacity: randomBetween(0.2, 1),
          phase: randomBetween(0, Math.PI * 2),
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      // Draw background if not transparent
      if (background !== 'transparent') {
        ctx.fillStyle = background;
        ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
      }

      // Update and draw particles
      particles.forEach(particle => {
        // Update position
        particle.x += particle.velocityX;
        particle.y += particle.velocityY;

        // Wrap around edges
        if (particle.x < 0) particle.x = window.innerWidth;
        if (particle.x > window.innerWidth) particle.x = 0;
        if (particle.y < 0) particle.y = window.innerHeight;
        if (particle.y > window.innerHeight) particle.y = 0;

        // Twinkle effect
        particle.phase += 0.02;
        const twinkle = (Math.sin(particle.phase) + 1) / 2;
        const currentOpacity = particle.opacity * (0.5 + twinkle * 0.5);

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particleColor;
        ctx.globalAlpha = currentOpacity;
        ctx.fill();
      });

      ctx.globalAlpha = 1;
      animationId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();

    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, [background, particleColor, minSize, maxSize, speed, particleDensity]);

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
        zIndex: 0,
      }}
    />
  );
};

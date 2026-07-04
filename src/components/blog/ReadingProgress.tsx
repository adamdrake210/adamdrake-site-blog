import { motion, useScroll, useSpring } from 'framer-motion';

export const ReadingProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 2,
        backgroundColor: 'var(--ink)',
        transformOrigin: '0%',
        scaleX,
        zIndex: 2000,
      }}
    />
  );
};

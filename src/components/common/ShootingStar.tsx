import { motion } from 'framer-motion';

export const ShootingStar = () => {
  return (
    <motion.div
      initial={{ x: '105vw', y: '8vh', rotate: -20, opacity: 0 }}
      animate={{
        x: '-25vw',
        y: '55vh',
        rotate: -20,
        opacity: [0, 1, 1, 0],
      }}
      transition={{ duration: 1.4, ease: 'easeIn' }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: 160,
        height: 2,
        borderRadius: 2,
        background: 'linear-gradient(90deg, #ffffff, rgba(255, 255, 255, 0))',
        boxShadow: '0 0 6px rgba(255, 255, 255, 0.8)',
        zIndex: 3000,
        pointerEvents: 'none',
      }}
    />
  );
};

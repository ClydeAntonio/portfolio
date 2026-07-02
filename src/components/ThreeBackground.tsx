import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { useRef, useEffect, useState } from 'react';

export default function ThreeBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();

  // Create a 3D parallax effect on the grid
  const rotateX = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const translateZ = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-bg">
      {/* Immersive Grid */}
      <motion.div
        style={{
          rotateX,
          translateZ,
          x: mousePos.x,
          y: mousePos.y,
          perspective: 1000,
        }}
        className="absolute inset-[-10%] opacity-20"
      >
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(var(--color-primary) 1px, transparent 1px), linear-gradient(90deg, var(--color-primary) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
            transform: 'translateZ(-100px) rotateX(45deg)',
          }}
        />
      </motion.div>

      {/* Atmospheric Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-900/20 blur-[150px] rounded-full" />
      <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-magenta-900/10 blur-[100px] rounded-full" />

      {/* Blueprint Overlay Surface */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'url("https://www.transparenttextures.com/patterns/carbon-fibre.png")',
        }}
      />
    </div>
  );
}

import type React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { portfolioContent } from '../data/content';

type Project = (typeof portfolioContent.projects)[0];

export default function ProjectCard({ project }: { project: Project }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['17.5deg', '-17.5deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-17.5deg', '17.5deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: 'preserve-3d',
      }}
      className="relative glass-panel sharp-corners group cursor-pointer h-[450px]"
    >
      <div
        className="h-6 flex items-center justify-between px-3 bg-white/5 border-b border-white/10"
        style={{ transform: 'translateZ(20px)' }}
      >
        <span className="blueprint-text !text-primary">{project.id}</span>
        <span className="blueprint-text !text-white/30">{project.category}</span>
      </div>

      <div
        className="relative h-48 overflow-hidden bg-white/90 flex items-center justify-center p-8"
        style={{ transform: 'translateZ(40px)' }}
      >
        <img
          src={project.image}
          alt={project.title}
          className="max-h-full max-w-full object-contain transition-all duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg/40 to-transparent pointer-events-none" />
        {project.status === 'IN_DEVELOPMENT' && (
          <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-amber-400/10 border border-amber-400/60 px-2.5 py-1 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            <span className="font-mono text-[10px] font-bold text-amber-400 tracking-widest">IN DEVELOPMENT</span>
          </div>
        )}
      </div>

      <div
        className="p-6 flex flex-col h-[calc(450px-192px-24px)] justify-between"
        style={{ transform: 'translateZ(60px)' }}
      >
        <div>
          <h3 className="text-xl text-white mb-1 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          {project.role && (
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 border border-primary/50 bg-primary/10 mb-2">
              <span className="w-1 h-1 rounded-full bg-primary" />
              <span className="font-mono text-[9px] font-bold text-primary tracking-widest">{project.role}</span>
            </span>
          )}
          <p className="text-sm text-gray-400 leading-relaxed">{project.description}</p>
        </div>

        <div className="space-y-3 pt-4">
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-2 py-0.5 bg-white/5 border border-white/10 font-mono text-[9px] text-white/40 group-hover:border-primary/40 group-hover:text-primary/60 transition-colors"
              >
                {t}
              </span>
            ))}
          </div>
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full px-3 py-1.5 border border-primary/40 text-primary font-heading text-[9px] tracking-widest sharp-corners hover:bg-primary hover:text-bg transition-all text-center"
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
              VISIT_SITE →
            </a>
          )}
        </div>
      </div>

      {/* Decorative corner accents */}
      <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-primary group-hover:w-4 group-hover:h-4 transition-all" />
      <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-primary group-hover:w-4 group-hover:h-4 transition-all" />
    </motion.div>
  );
}

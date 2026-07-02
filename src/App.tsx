import { motion, useScroll, useSpring } from 'motion/react';
import {
  Terminal,
  Settings,
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  Activity,
} from 'lucide-react';
import { portfolioContent } from './data/content';
import ThreeBackground from './components/ThreeBackground';
import ProjectCard from './components/ProjectCard';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="relative min-h-screen selection:bg-primary selection:text-bg">
      <ThreeBackground />

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[100] origin-left"
        style={{ scaleX }}
      />

      {/* Navigation Header */}
      <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 h-16 glass-panel border-x-0 border-t-0 border-b-white/10">
        <div className="flex items-center gap-3">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
          >
            <Settings className="w-5 h-5 text-primary" />
          </motion.div>
          <span className="font-heading text-lg tracking-tighter text-primary drop-shadow-[0_0_8px_rgba(184,115,51,0.4)]">
            {portfolioContent.header.title}
          </span>
        </div>

        <div className="hidden md:flex gap-8">
          {['SCHEMATICS', 'INFRASTRUCTURE', 'LOGS'].map((nav) => (
            <a
              key={nav}
              href={`#${nav.toLowerCase()}`}
              className="blueprint-text hover:text-white transition-colors cursor-pointer"
            >
              ROOT/{nav}
            </a>
          ))}
        </div>

        <button className="text-primary hover:scale-110 transition-transform">
          <Terminal className="w-5 h-5" />
        </button>
      </header>

      {/* Main Content */}
      <main className="relative z-10 pt-16">
        {/* HERO SECTION */}
        <section
          id="hero"
          className="min-h-screen flex flex-col items-center justify-center px-6 py-20 text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-primary/30 bg-primary/5 mb-8">
              <div className="indicator-copper" />
              <span className="blueprint-text !text-primary">
                {portfolioContent.header.version}
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading text-white mb-6 tracking-tight leading-none">
              {portfolioContent.hero.role}
            </h1>

            <p className="text-xl md:text-2xl font-heading text-primary/80 mb-8 max-w-2xl mx-auto tracking-wide">
              {portfolioContent.hero.tagline}
            </p>

            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
              {portfolioContent.hero.description}
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#logs"
                className="px-8 py-4 bg-primary text-bg font-heading text-sm sharp-corners hover:brightness-125 transition-all group flex items-center gap-2"
              >
                {portfolioContent.hero.primaryAction}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#schematics"
                className="px-8 py-4 border border-white/20 text-white font-heading text-sm sharp-corners hover:bg-white/5 transition-all"
              >
                {portfolioContent.hero.secondaryAction}
              </a>
            </div>
          </motion.div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="schematics" className="py-32 px-6 max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-16 border-b border-white/10 pb-6">
            <div>
              <h2 className="text-3xl text-white mb-2">FEATURED_PROTOTYPES</h2>
              <p className="blueprint-text">SELECTED_WORKS // PROJECT_LOG</p>
            </div>
            <div className="hidden sm:block text-white/20 font-mono text-xs">
              ARCHIVE_INDEX: 001 — 003
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioContent.projects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="infrastructure" className="py-32 px-6 bg-black/20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative group"
            >
              <div className="absolute -inset-4 border border-primary/20 pointer-events-none group-hover:border-primary/40 transition-colors" />
              <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-primary" />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-primary" />

              <div className="bg-primary/5 h-[500px] flex items-center justify-center overflow-hidden grayscale">
                <img
                  src="/images/2.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div>
                <p className="blueprint-text !text-primary mb-4">{portfolioContent.about.header}</p>
                <h2 className="text-4xl text-white mb-6">{portfolioContent.about.title}</h2>
                <p className="text-xl text-gray-400 leading-relaxed">
                  {portfolioContent.about.description}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-10 pt-10 border-t border-white/10">
                {portfolioContent.about.stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="blueprint-text !text-white/30 mb-2">{stat.label}</p>
                    <p className="text-3xl font-heading text-primary">{stat.value}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* TECHNICAL STACK */}
        <section className="py-24 px-6 border-y border-white/5 bg-gradient-to-r from-primary/5 via-transparent to-primary/5">
          <div className="max-w-7xl mx-auto">
            <div className="mb-10 flex items-end justify-between border-b border-white/10 pb-6">
              <div>
                <h2 className="text-3xl text-white mb-2">TECH_STACK</h2>
                <p className="blueprint-text">ACTIVE_TOOLS // LANGUAGE_MODULES</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {portfolioContent.techStack.map((group, i) => (
                <motion.div
                  key={group.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="glass-panel sharp-corners p-5 border-white/5"
                >
                  <p className="blueprint-text !text-primary mb-4">{group.category}</p>
                  <div className="flex flex-col gap-2">
                    {group.items.map((item) => (
                      <span key={item} className="font-mono text-xs text-white/60 hover:text-white transition-colors">
                        › {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="logs" className="py-40 px-6 max-w-4xl mx-auto text-center space-y-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
            <h2 className="text-5xl text-white mb-6">{portfolioContent.contact.title}</h2>
            <p className="text-lg text-gray-400 mb-12">{portfolioContent.contact.description}</p>

            <div className="flex flex-wrap justify-center gap-6">
              <a
                href={`mailto:${portfolioContent.links.find((l) => l.type === 'email')?.value}`}
                className="relative px-10 py-4 bg-primary text-bg font-heading text-sm bold uppercase tracking-widest sharp-corners overflow-hidden group"
              >
                <span className="relative z-10">{portfolioContent.contact.primaryAction}</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-all" />
              </a>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-16">
            {portfolioContent.links.map((link) => (
              <a
                key={link.label}
                href={link.type === 'email' ? `mailto:${link.value}` : link.value}
                target={link.type === 'url' ? '_blank' : undefined}
                rel={link.type === 'url' ? 'noopener noreferrer' : undefined}
                className="p-6 glass-panel sharp-corners border-white/5 hover:border-primary/50 transition-all group"
              >
                {link.type === 'email' ? (
                  <Mail className="w-5 h-5 text-primary mb-3 mx-auto" />
                ) : link.label === 'VERSION_CONTROL' ? (
                  <Github className="w-5 h-5 text-primary mb-3 mx-auto" />
                ) : (
                  <Linkedin className="w-5 h-5 text-primary mb-3 mx-auto" />
                )}
                <p className="blueprint-text group-hover:text-white transition-colors">
                  {link.label}
                </p>
              </a>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="fixed bottom-0 w-full h-10 glass-panel border-x-0 border-b-0 border-t-white/10 z-50 flex items-center justify-between px-6">
        <p className="blueprint-text !text-white/20">{portfolioContent.footer.copyright}</p>
        <div className="flex gap-6">
          {portfolioContent.footer.metadata.map((m) => (
            <div key={m.label} className="flex gap-2 items-center">
              <span className="blueprint-text !text-white/20">{m.label}:</span>
              <span className="blueprint-text !text-primary">{m.value}</span>
            </div>
          ))}
          <div className="hidden sm:flex gap-2 items-center border-l border-white/10 pl-6">
            <Activity className="w-3 h-3 text-primary animate-pulse" />
            <span className="blueprint-text !text-primary">CORE_ACTIVE</span>
          </div>
        </div>
      </footer>

      {/* Side HUD decor */}
      <div className="fixed bottom-16 right-6 flex flex-col gap-3 z-50">
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
            className={`w-2 h-2 rounded-full ${i === 1 ? 'bg-primary' : i === 2 ? 'bg-cyan-400' : 'bg-magenta-500 shadow-[0_0_8px_#d946ef]'}`}
          />
        ))}
      </div>
    </div>
  );
}

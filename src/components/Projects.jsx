import { useState, forwardRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

const categories = ['All', 'Web', 'AI/ML', 'Mobile'];

const statusColors = {
  Live: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
  'In Progress': 'bg-amber-500/20 text-amber-400 border-amber-500/30',
  Completed: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' },
  }),
};

/* ── Featured Project Card ── */
function FeaturedCard({ project }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      className="card-hover col-span-full rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border)] overflow-hidden mb-8"
    >
      <div className="grid lg:grid-cols-2 gap-0">
        {/* Preview Area */}
        <div className="relative h-64 lg:h-auto bg-gradient-to-br from-[var(--accent)]/10 to-[var(--accent-2)]/10 flex items-center justify-center p-8">
          <div className="w-full max-w-md rounded-xl border border-[var(--border)] bg-[var(--bg-primary)]/50 p-6 text-center">
            <div className="text-[var(--accent)] font-display text-2xl font-bold mb-2">
              {project.title.split('—')[0].trim()}
            </div>
            <p className="text-[var(--text-secondary)] text-sm">{project.description}</p>
          </div>
          <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium bg-[var(--accent)]/20 text-[var(--accent)] border border-[var(--accent)]/30">
            ⭐ Featured
          </div>
        </div>

        {/* Info */}
        <div className="p-8 space-y-4">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-2xl font-display font-bold text-[var(--text-primary)]">
              {project.title}
            </h3>
            <span className={`shrink-0 px-3 py-1 rounded-full text-xs font-medium border ${statusColors[project.status]}`}>
              {project.status}
            </span>
          </div>

          <p className="text-[var(--text-secondary)] leading-relaxed">{project.longDescription}</p>

          {project.highlights && (
            <ul className="space-y-2">
              {project.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <span className="text-[var(--accent)] mt-1">▸</span>
                  {h}
                </li>
              ))}
            </ul>
          )}

          {/* Tech Chips */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-full text-xs font-code bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/20"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-3 pt-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--bg-primary)] border border-[var(--border)] text-[var(--text-primary)] text-sm font-medium hover:border-[var(--accent)] transition-colors"
              >
                <FaGithub className="w-4 h-4" />
                Source Code
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)] text-white text-sm font-medium hover:shadow-lg hover:shadow-[var(--accent)]/25 transition-all"
              >
                <FaExternalLinkAlt className="w-3.5 h-3.5" />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ── Regular Project Card ── */
const ProjectCard = forwardRef(({ project, index }, ref) => {
  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="group card-hover rounded-xl bg-[var(--bg-secondary)] border border-[var(--border)] overflow-hidden relative"
    >
      {/* Category Tag */}
      <div className="absolute top-3 right-3 z-10 px-2.5 py-1 rounded-full text-xs font-code bg-[var(--bg-primary)]/80 text-[var(--accent)] border border-[var(--border)]">
        {project.category}
      </div>

      {/* Preview Area */}
      <div className="relative h-44 bg-gradient-to-br from-[var(--accent)]/5 to-[var(--accent-2)]/5 flex items-center justify-center overflow-hidden">
        <div className="text-[var(--accent)] font-display text-lg font-bold opacity-30">
          {project.title.split('—')[0].trim()}
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-[var(--bg-primary)]/90 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-[var(--accent)] text-white hover:scale-110 transition-transform"
              aria-label={`View ${project.title} on GitHub`}
            >
              <FaGithub className="w-5 h-5" />
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-[var(--accent-2)] text-white hover:scale-110 transition-transform"
              aria-label={`View ${project.title} live demo`}
            >
              <FaExternalLinkAlt className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-lg font-display font-semibold text-[var(--text-primary)] line-clamp-1">
            {project.title}
          </h3>
          <span className={`shrink-0 px-2 py-0.5 rounded-full text-[10px] font-medium border ${statusColors[project.status]}`}>
            {project.status}
          </span>
        </div>

        <p className="text-sm text-[var(--text-secondary)] line-clamp-2">{project.description}</p>

        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.tech.slice(0, 4).map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 rounded-full text-[10px] font-code bg-[var(--accent)]/10 text-[var(--accent)]"
            >
              {t}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="px-2 py-0.5 rounded-full text-[10px] font-code text-[var(--text-secondary)]">
              +{project.tech.length - 4}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
});

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const { projects, social } = portfolioData;

  const featured = projects.find((p) => p.featured);
  const regularProjects =
    activeCategory === 'All'
      ? projects.filter((p) => !p.featured)
      : projects.filter((p) => !p.featured && p.category === activeCategory);

  return (
    <section id="projects" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold section-heading section-heading-center">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-[var(--text-secondary)] mt-6 max-w-2xl mx-auto">
            A showcase of things I&apos;ve built and contributed to
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`relative px-5 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                activeCategory === cat
                  ? 'text-white'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] bg-[var(--bg-secondary)] border border-[var(--border)]'
              }`}
            >
              {activeCategory === cat && (
                <motion.div
                  layoutId="project-tab"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)]"
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          ))}
        </motion.div>

        {/* Featured Project */}
        {featured && activeCategory === 'All' && <FeaturedCard project={featured} />}

        {/* Projects Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {regularProjects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mt-12"
        >
          <a
            href={social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-[var(--accent)] text-[var(--accent)] font-semibold hover:bg-[var(--accent)]/10 transition-all duration-300 hover:scale-105"
          >
            <FaGithub className="w-5 h-5" />
            View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}

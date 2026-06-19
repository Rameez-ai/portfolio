import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  SiReact, SiTailwindcss, SiJavascript, SiHtml5, SiCss,
  SiPython, SiFastapi, SiFlask, SiNodedotjs, SiFirebase,
  SiTensorflow, SiScikitlearn, SiPandas, SiNumpy,
  SiGit, SiDocker, SiPostman, SiGoogle, SiLangchain,
} from 'react-icons/si';
import { FaCode } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

/* Map string icon names to actual components */
const iconComponents = {
  SiReact, SiTailwindcss, SiJavascript, SiHtml5,
  SiCss3: SiCss, SiCss,
  SiPython, SiFastapi, SiFlask, SiNodedotjs, SiFirebase,
  SiTensorflow, SiScikitlearn, SiPandas, SiNumpy,
  SiGit, SiDocker, SiPostman,
  SiGoogle, SiLangchain,
  SiVisualstudiocode: FaCode,
  SiChromadb: SiGoogle,
};

const categories = ['All', 'Frontend', 'Backend', 'AI/ML', 'Tools'];

/* ── Circular Progress Ring ── */
function ProgressRing({ progress, size = 72, strokeWidth = 5 }) {
  const [animatedProgress, setAnimatedProgress] = useState(0);
  const ref = useRef(null);
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (animatedProgress / 100) * circumference;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimatedProgress(progress);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [progress]);

  return (
    <div ref={ref} className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="var(--border)"
          strokeWidth={strokeWidth}
          fill="none"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="url(#progressGradient)"
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{ transition: 'stroke-dashoffset 1.2s ease-in-out' }}
        />
        <defs>
          <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--accent)" />
            <stop offset="100%" stopColor="var(--accent-2)" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-sm font-bold text-[var(--text-primary)]">{progress}%</span>
      </div>
    </div>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' },
  }),
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');
  const { skills } = portfolioData;

  const filtered =
    activeCategory === 'All'
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-20 lg:py-28 bg-[var(--bg-secondary)]/50">
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
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-[var(--text-secondary)] mt-6 max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
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
                  layoutId="skill-tab"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)]"
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((skill, i) => {
              const IconComp = iconComponents[skill.icon] || SiGoogle;
              return (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="card-hover p-5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border)] flex flex-col items-center gap-3"
                >
                  <IconComp className="w-8 h-8 text-[var(--accent)]" />
                  <span className="text-sm font-medium text-[var(--text-primary)]">{skill.name}</span>
                  <ProgressRing progress={skill.level} />
                  <span className="text-xs font-code px-2 py-0.5 rounded-full bg-[var(--accent)]/10 text-[var(--accent)]">
                    {skill.category}
                  </span>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Group Badges */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="flex flex-wrap justify-center gap-3 mt-12"
        >
          {['Languages', 'Frameworks', 'AI/ML Libraries', 'Databases', 'DevOps Tools'].map((label) => (
            <span
              key={label}
              className="px-4 py-2 rounded-full text-sm font-medium border border-[var(--border)] text-[var(--text-secondary)] bg-[var(--bg-secondary)]"
            >
              {label}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

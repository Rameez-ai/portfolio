import { motion } from 'framer-motion';
import { FaBriefcase, FaRocket } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

const typeColors = {
  Internship: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
  Freelance: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
  'Part-time': 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
  'Full-time': 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' },
  }),
};

function OpenToOpportunities() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      className="max-w-2xl mx-auto"
    >
      <div className="card-hover rounded-2xl bg-gradient-to-br from-[var(--accent)]/10 to-[var(--accent-2)]/10 border border-[var(--border)] p-8 sm:p-12 text-center space-y-6">
        <div className="w-20 h-20 mx-auto rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/20 flex items-center justify-center">
          <FaRocket className="w-8 h-8 text-[var(--accent)]" />
        </div>

        <h3 className="text-2xl font-display font-bold text-[var(--text-primary)]">
          Open to <span className="gradient-text">Internships & Opportunities</span>
        </h3>

        <p className="text-[var(--text-secondary)] max-w-md mx-auto leading-relaxed">
          I&apos;m actively seeking internship opportunities where I can contribute my AI/ML and Full Stack
          development skills to solve meaningful problems. Let&apos;s build something amazing together!
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <span className="px-4 py-1.5 rounded-full text-sm font-code bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/20">
            AI/ML Internship
          </span>
          <span className="px-4 py-1.5 rounded-full text-sm font-code bg-[var(--accent-2)]/10 text-[var(--accent-2)] border border-[var(--accent-2)]/20">
            Full Stack Development
          </span>
          <span className="px-4 py-1.5 rounded-full text-sm font-code bg-purple-500/10 text-purple-400 border border-purple-500/20">
            Remote / On-site
          </span>
        </div>

        <button
          onClick={scrollToContact}
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)] text-white font-semibold hover:shadow-lg hover:shadow-[var(--accent)]/25 transition-all duration-300 hover:scale-105"
        >
          Get in Touch
        </button>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold section-heading section-heading-center">
            <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-[var(--text-secondary)] mt-6 max-w-2xl mx-auto">
            Professional experience and contributions
          </p>
        </motion.div>

        {experience.length === 0 ? (
          <OpenToOpportunities />
        ) : (
          <div className="relative max-w-3xl mx-auto">
            <div className="timeline-line" />

            {experience.map((exp, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="relative pl-14 pb-12 last:pb-0"
              >
                <div className="timeline-node top-1" />

                <div className="card-hover rounded-xl bg-[var(--bg-secondary)] border border-[var(--border)] p-6 space-y-4">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="flex items-start gap-4">
                      <div className="shrink-0 w-12 h-12 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/20 flex items-center justify-center">
                        <FaBriefcase className="w-5 h-5 text-[var(--accent)]" />
                      </div>
                      <div>
                        <h3 className="text-lg font-display font-semibold text-[var(--text-primary)]">
                          {exp.role}
                        </h3>
                        <p className="text-sm text-[var(--accent)] font-medium">{exp.company}</p>
                      </div>
                    </div>
                    {exp.type && (
                      <span className={`shrink-0 px-3 py-1 rounded-full text-xs font-medium border ${typeColors[exp.type] || typeColors.Internship}`}>
                        {exp.type}
                      </span>
                    )}
                  </div>

                  <div className="text-sm text-[var(--text-secondary)]">{exp.duration}</div>

                  {exp.responsibilities && (
                    <ul className="space-y-1.5">
                      {exp.responsibilities.map((r, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                          <span className="text-[var(--accent)] mt-0.5">▸</span>
                          {r}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

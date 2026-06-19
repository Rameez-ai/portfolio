import { motion } from 'framer-motion';
import { FaGraduationCap, FaMapMarkerAlt } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' },
  }),
};

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-20 lg:py-28 bg-[var(--bg-secondary)]/50">
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
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-[var(--text-secondary)] mt-6 max-w-2xl mx-auto">
            My academic journey and accomplishments
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          <div className="timeline-line" />

          {education.map((edu, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="relative pl-14 pb-12 last:pb-0"
            >
              {/* Timeline Node */}
              <div className="timeline-node top-1" />

              {/* Card */}
              <div className="card-hover rounded-xl bg-[var(--bg-secondary)] border border-[var(--border)] p-6 space-y-4">
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="flex items-start gap-4">
                    {/* University Logo Placeholder */}
                    <div className="shrink-0 w-12 h-12 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/20 flex items-center justify-center">
                      <FaGraduationCap className="w-5 h-5 text-[var(--accent)]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-display font-semibold text-[var(--text-primary)]">
                        {edu.degree}
                      </h3>
                      <p className="text-sm text-[var(--accent)] font-medium">{edu.institution}</p>
                    </div>
                  </div>
                  <span
                    className={`shrink-0 px-3 py-1 rounded-full text-xs font-medium border ${
                      edu.status === 'Ongoing'
                        ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30'
                        : 'bg-blue-500/20 text-blue-400 border-blue-500/30'
                    }`}
                  >
                    {edu.status}
                  </span>
                </div>

                {/* Meta */}
                <div className="flex flex-wrap gap-4 text-sm text-[var(--text-secondary)]">
                  <span className="flex items-center gap-1.5">
                    <FaMapMarkerAlt className="w-3.5 h-3.5" />
                    {edu.location}
                  </span>
                  <span>{edu.duration}</span>
                  {edu.cgpa && <span className="font-semibold text-[var(--accent)]">CGPA: {edu.cgpa}</span>}
                  {edu.grade && <span className="font-semibold text-[var(--accent)]">{edu.grade}</span>}
                </div>

                {/* Coursework */}
                {edu.coursework && edu.coursework.length > 0 && (
                  <div>
                    <p className="text-xs uppercase tracking-wider text-[var(--text-secondary)] mb-2">
                      Relevant Coursework
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course) => (
                        <span
                          key={course}
                          className="px-3 py-1 rounded-full text-xs font-code bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/20"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Achievements */}
                {edu.achievements && edu.achievements.length > 0 && (
                  <div>
                    <p className="text-xs uppercase tracking-wider text-[var(--text-secondary)] mb-2">
                      Achievements
                    </p>
                    <ul className="space-y-1.5">
                      {edu.achievements.map((ach, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                          <span className="text-[var(--accent)] mt-0.5">▸</span>
                          {ach}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

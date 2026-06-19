import { motion } from 'framer-motion';
import { FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

const categoryColors = {
  'AI/ML': 'bg-purple-500/20 text-purple-400 border-purple-500/30',
  Web: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  Cloud: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
  Other: 'bg-gray-500/20 text-gray-400 border-gray-500/30',
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' },
  }),
};

export default function Certifications() {
  const { certifications } = portfolioData;

  if (!certifications || certifications.length === 0) return null;

  return (
    <section id="certifications" className="py-20 lg:py-28 bg-[var(--bg-secondary)]/50">
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
            <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-[var(--text-secondary)] mt-6 max-w-2xl mx-auto">
            Professional certifications and credentials I&apos;ve earned
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="card-hover rounded-xl bg-[var(--bg-secondary)] border border-[var(--border)] p-6 space-y-4 relative"
            >
              {/* Category Badge */}
              <span className={`absolute top-4 right-4 px-2.5 py-1 rounded-full text-xs font-medium border ${categoryColors[cert.category] || categoryColors.Other}`}>
                {cert.category}
              </span>

              {/* Issuer Logo Placeholder + Name */}
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/20 flex items-center justify-center">
                  <FaCertificate className="w-5 h-5 text-[var(--accent)]" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-base font-display font-semibold text-[var(--text-primary)] line-clamp-2 pr-16">
                    {cert.name}
                  </h3>
                  <p className="text-sm text-[var(--accent)] font-medium mt-0.5">{cert.issuer}</p>
                </div>
              </div>

              {/* Details */}
              <div className="space-y-2 text-sm text-[var(--text-secondary)]">
                <div className="flex justify-between">
                  <span>Issued</span>
                  <span className="font-medium text-[var(--text-primary)]">{cert.date}</span>
                </div>
                {cert.credentialId && (
                  <div className="flex justify-between">
                    <span>Credential ID</span>
                    <span className="font-code text-xs text-[var(--text-primary)]">{cert.credentialId}</span>
                  </div>
                )}
              </div>

              {/* Verify Button */}
              {cert.verifyUrl && (
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 w-full justify-center px-4 py-2.5 rounded-lg border border-[var(--border)] text-sm font-medium text-[var(--accent)] hover:bg-[var(--accent)]/10 hover:border-[var(--accent)] transition-all duration-300"
                >
                  <FaExternalLinkAlt className="w-3.5 h-3.5" />
                  Verify Credential
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

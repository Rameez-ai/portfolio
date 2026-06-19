import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaMapMarkerAlt, FaEnvelope, FaCode, FaProjectDiagram, FaCoffee } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

const iconMap = {
  FaCode: FaCode,
  FaProjectDiagram: FaProjectDiagram,
  FaCoffee: FaCoffee,
  FaGraduationCap: FaGraduationCap,
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' },
  }),
};

export default function About() {
  const { personal, stats, funFacts } = portfolioData;

  const highlightCards = [
    { icon: FaGraduationCap, label: 'Education', value: personal.degree, color: 'text-purple-400' },
    { icon: FaBriefcase, label: 'Focus', value: 'AI & Full Stack', color: 'text-blue-400' },
    { icon: FaMapMarkerAlt, label: 'Location', value: personal.location, color: 'text-green-400' },
    { icon: FaEnvelope, label: 'Email', value: personal.email, color: 'text-pink-400' },
  ];

  return (
    <section id="about" className="py-20 lg:py-28">
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
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-[var(--text-secondary)] mt-6 max-w-2xl mx-auto">
            Get to know the developer behind the code
          </p>
        </motion.div>

        {/* Two-Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Left — Photo + Stats */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="space-y-6"
          >
            <div className="relative rounded-2xl overflow-hidden border border-[var(--border)] bg-[var(--bg-secondary)] p-1">
              <img
                src={personal.profileImage}
                alt={`${personal.name} about photo`}
                loading="lazy"
                className="w-full h-80 object-cover object-top rounded-xl"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = `data:image/svg+xml,${encodeURIComponent(
                    `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="320" viewBox="0 0 600 320"><rect fill="#111827" width="600" height="320"/><text x="300" y="170" text-anchor="middle" fill="#6C63FF" font-size="48" font-family="sans-serif">${personal.nickname}</text></svg>`
                  )}`;
                }}
              />
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { label: 'Projects', value: `${stats.projects}+` },
                { label: 'Technologies', value: `${stats.technologies}+` },
                { label: 'Year', value: personal.year.split(' ')[0] },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  custom={i + 1}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="text-center p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border)]"
                >
                  <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-sm text-[var(--text-secondary)] mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — Bio Paragraphs */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {personal.bio.map((paragraph, i) => (
              <motion.p
                key={i}
                custom={i}
                variants={fadeUp}
                className="text-[var(--text-secondary)] leading-relaxed text-lg"
              >
                {paragraph}
              </motion.p>
            ))}

            {personal.availability && (
              <motion.div
                custom={3}
                variants={fadeUp}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20"
              >
                <span className="availability-pulse" />
                <span className="text-emerald-400 font-medium text-sm">Available for Internships</span>
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* Highlight Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {highlightCards.map((card, i) => (
            <motion.div
              key={card.label}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="card-hover p-5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border)] text-center"
            >
              <card.icon className={`w-8 h-8 mx-auto mb-3 ${card.color}`} />
              <div className="text-xs text-[var(--text-secondary)] uppercase tracking-wider mb-1">
                {card.label}
              </div>
              <div className="text-sm font-medium text-[var(--text-primary)] truncate">
                {card.value}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Fun Facts */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {funFacts.map((fact, i) => {
            const IconComp = iconMap[fact.icon] || FaCode;
            return (
              <motion.div
                key={fact.label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="card-hover flex items-center gap-4 p-5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border)]"
              >
                <div className="p-3 rounded-lg bg-[var(--accent)]/10">
                  <IconComp className="w-6 h-6 text-[var(--accent)]" />
                </div>
                <div>
                  <div className="text-xl font-bold text-[var(--text-primary)]">{fact.value}</div>
                  <div className="text-xs text-[var(--text-secondary)]">{fact.label}</div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaDownload, FaChevronDown } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

/* ── Typewriter with Framer Motion ── */
function Typewriter({ words }) {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    let timeout;

    if (!isDeleting && displayed === current) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayed === '') {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    } else {
      timeout = setTimeout(
        () => {
          setDisplayed(
            isDeleting ? current.slice(0, displayed.length - 1) : current.slice(0, displayed.length + 1)
          );
        },
        isDeleting ? 40 : 80
      );
    }
    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, wordIndex, words]);

  return (
    <span className="font-code text-[var(--accent-2)]">
      {displayed}
      <span className="typewriter-cursor" />
    </span>
  );
}

/* ── Particle Mesh Background ── */
function ParticleMesh() {
  const meshRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    if (!meshRef.current) return;
    const { clientX, clientY } = e;
    const x = (clientX / window.innerWidth - 0.5) * 20;
    const y = (clientY / window.innerHeight - 0.5) * 20;
    meshRef.current.style.transform = `translate(${x}px, ${y}px)`;
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  const particles = useState(() => Array.from({ length: 40 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    delay: `${Math.random() * 10}s`,
    size: Math.random() * 3 + 1,
  })))[0];

  const meshLines = useState(() => Array.from({ length: 12 }, (_, i) => ({
    id: i,
    top: `${(i / 12) * 100}%`,
    left: `${(i / 12) * 100}%`,
    delay: `${i * 2}s`,
  })))[0];

  return (
    <div className="particle-mesh" ref={meshRef} style={{ transition: 'transform 0.3s ease-out' }}>
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: p.left,
            top: p.top,
            animationDelay: p.delay,
            width: `${p.size}px`,
            height: `${p.size}px`,
          }}
        />
      ))}
      {meshLines.map((l) => (
        <div
          key={`line-${l.id}`}
          className="mesh-line"
          style={{
            top: l.id % 2 === 0 ? l.top : '0',
            left: l.id % 2 !== 0 ? l.left : '0',
            animationDelay: l.delay,
          }}
        />
      ))}
    </div>
  );
}

/* ── Floating Tech Badges ── */
const techBadges = [
  { label: 'React', x: '-40px', y: '20%', anim: 'animate-float' },
  { label: 'Python', x: '110%', y: '15%', anim: 'animate-float-delayed' },
  { label: 'AI', x: '-20px', y: '75%', anim: 'animate-float-slow' },
  { label: 'FastAPI', x: '105%', y: '70%', anim: 'animate-float' },
  { label: 'TensorFlow', x: '50%', y: '-20px', anim: 'animate-float-delayed' },
];

export default function Hero() {
  const { personal, social, roles } = portfolioData;

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      <ParticleMesh />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 w-full">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Left Column (60%) */}
          <motion.div
            className="lg:col-span-3 space-y-6"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            {/* Greeting Tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1.5 rounded-full border border-[var(--border)] bg-[var(--bg-secondary)]/50"
            >
              <span className="font-code text-sm text-[var(--text-secondary)]">
                &lt;<span className="text-[var(--accent)]">Hello World</span> /&gt;
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-tight"
            >
              {"I'm "}
              <span className="gradient-text-animated">{personal.name}</span>
            </motion.h1>

            {/* Typewriter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl sm:text-2xl"
            >
              <Typewriter words={roles} />
            </motion.div>

            {/* Bio Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-[var(--text-secondary)] text-lg max-w-xl leading-relaxed"
            >
              {personal.tagline}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)] text-white font-semibold hover:shadow-lg hover:shadow-[var(--accent)]/25 transition-all duration-300 hover:scale-105"
              >
                <FaDownload className="w-4 h-4" />
                Download CV
              </a>
              <button
                onClick={() => scrollTo('projects')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-[var(--accent)] text-[var(--accent)] font-semibold hover:bg-[var(--accent)]/10 transition-all duration-300 hover:scale-105"
              >
                View Projects
              </button>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex gap-4 pt-2"
            >
              {[
                { icon: FaGithub, href: social.github, label: 'GitHub' },
                { icon: FaLinkedin, href: social.linkedin, label: 'LinkedIn' },
                { icon: FaEnvelope, href: social.email, label: 'Email' },
                ...(social.twitter
                  ? [{ icon: FaTwitter, href: social.twitter, label: 'Twitter' }]
                  : []),
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-3 rounded-full bg-[var(--bg-secondary)] border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all duration-300 hover:scale-110"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column (40%) — Profile */}
          <motion.div
            className="lg:col-span-2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="relative">
              {/* Glow */}
              <div className="glow-behind top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

              {/* Hexagon */}
              <div className="hexagon-wrapper flex items-center justify-center">
                <div className="hexagon-border" />
                <div className="hexagon-frame">
                  <img
                    src={personal.profileImage}
                    alt={`${personal.name} profile photo`}
                    loading="lazy"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `data:image/svg+xml,${encodeURIComponent(
                        `<svg xmlns="http://www.w3.org/2000/svg" width="280" height="280" viewBox="0 0 280 280">
                          <rect fill="#111827" width="280" height="280"/>
                          <text x="140" y="150" text-anchor="middle" fill="#6C63FF" font-size="64" font-family="sans-serif">${personal.nickname}</text>
                        </svg>`
                      )}`;
                    }}
                  />
                </div>
              </div>

              {/* Floating Tech Badges */}
              {techBadges.map((badge, i) => (
                <div
                  key={i}
                  className={`tech-badge-float glass text-[var(--accent)] ${badge.anim}`}
                  style={{ left: badge.x, top: badge.y }}
                >
                  {badge.label}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <button
          onClick={() => scrollTo('about')}
          className="flex flex-col items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
          aria-label="Scroll down"
        >
          <span className="text-xs font-medium tracking-wider uppercase">Scroll Down</span>
          <FaChevronDown className="w-4 h-4 animate-bounce-slow" />
        </button>
      </motion.div>
    </section>
  );
}

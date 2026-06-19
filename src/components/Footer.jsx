import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaChevronUp, FaHeart } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { personal, social } = portfolioData;
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowBackToTop(window.scrollY > 300);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const quickLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Projects', id: 'projects' },
    { label: 'Skills', id: 'skills' },
    { label: 'Contact', id: 'contact' },
  ];

  const socialLinks = [
    { icon: FaGithub, href: social.github, label: 'GitHub' },
    { icon: FaLinkedin, href: social.linkedin, label: 'LinkedIn' },
    { icon: FaEnvelope, href: social.email, label: 'Email' },
    ...(social.twitter ? [{ icon: FaTwitter, href: social.twitter, label: 'Twitter' }] : []),
  ];

  return (
    <>
      <footer className="border-t border-[var(--border)] bg-[var(--bg-secondary)]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-12">
          <div className="grid sm:grid-cols-3 gap-8 items-start">
            {/* Logo + Tagline */}
            <div className="space-y-3">
              <button
                onClick={scrollToTop}
                className="text-2xl font-display font-bold gradient-text"
                aria-label="Back to top"
              >
                {personal.nickname}
              </button>
              <p className="text-sm text-[var(--text-secondary)] max-w-xs">
                {personal.tagline}
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-[var(--text-primary)] mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollTo(link.id)}
                      className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-[var(--text-primary)] mb-4">
                Connect
              </h4>
              <div className="flex gap-3">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="p-2.5 rounded-full bg-[var(--bg-primary)] border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all duration-300"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-10 pt-6 border-t border-[var(--border)] text-center text-sm text-[var(--text-secondary)]">
            <p className="flex items-center justify-center gap-1.5 flex-wrap">
              © {new Date().getFullYear()} {personal.name}. Built with React &
              <FaHeart className="w-3.5 h-3.5 text-red-500 inline" />
            </p>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)] text-white shadow-lg hover:shadow-[var(--accent)]/25 transition-shadow"
            aria-label="Back to top"
          >
            <FaChevronUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}

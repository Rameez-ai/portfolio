import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import {
  FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin,
  FaGithub, FaTwitter, FaPaperPlane, FaSpinner,
} from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' },
  }),
};

export default function Contact() {
  const { personal, social } = portfolioData;
  const formRef = useRef(null);
  const [sending, setSending] = useState(false);
  const [toast, setToast] = useState(null);
  const [errors, setErrors] = useState({});

  const validate = (data) => {
    const errs = {};
    if (!data.user_name.trim()) errs.user_name = 'Name is required';
    if (!data.user_email.trim()) errs.user_email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.user_email))
      errs.user_email = 'Invalid email address';
    if (!data.subject.trim()) errs.subject = 'Subject is required';
    if (!data.message.trim()) errs.message = 'Message is required';
    return errs;
  };

  const showToast = (type, text) => {
    setToast({ type, text });
    setTimeout(() => setToast(null), 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      user_name: formRef.current.user_name.value,
      user_email: formRef.current.user_email.value,
      subject: formRef.current.subject.value,
      message: formRef.current.message.value,
    };

    const validationErrors = validate(formData);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setSending(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      showToast('success', "Message sent! I'll reply within 24 hours. ✓");
      formRef.current.reset();
    } catch {
      showToast('error', 'Oops! Something went wrong. Try emailing directly.');
    } finally {
      setSending(false);
    }
  };

  const contactInfo = [
    { icon: FaEnvelope, label: 'Email', value: personal.email, href: `mailto:${personal.email}` },
    { icon: FaPhone, label: 'Phone', value: personal.phone, href: `tel:${personal.phone}` },
    { icon: FaMapMarkerAlt, label: 'Location', value: personal.location, href: null },
    { icon: FaLinkedin, label: 'LinkedIn', value: 'Connect with me', href: social.linkedin },
  ];

  return (
    <section id="contact" className="py-20 lg:py-28">
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
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-[var(--text-secondary)] mt-6 max-w-2xl mx-auto">
            Have a project in mind or want to chat? I&apos;d love to hear from you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left — Contact Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {contactInfo.map((item, i) => (
              <motion.div
                key={item.label}
                custom={i}
                variants={fadeUp}
                className="card-hover flex items-center gap-4 p-5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border)]"
              >
                <div className="p-3 rounded-lg bg-[var(--accent)]/10">
                  <item.icon className="w-5 h-5 text-[var(--accent)]" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-[var(--text-secondary)] uppercase tracking-wider">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors truncate block"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium text-[var(--text-primary)] truncate">
                      {item.value}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Availability Badge */}
            {personal.availability && (
              <motion.div
                custom={4}
                variants={fadeUp}
                className="flex items-center gap-3 p-5 rounded-xl bg-emerald-500/5 border border-emerald-500/20"
              >
                <span className="availability-pulse" />
                <div>
                  <p className="text-sm font-semibold text-emerald-400">
                    Available for Internships ✓
                  </p>
                  <p className="text-xs text-[var(--text-secondary)] mt-0.5">
                    Open to remote & on-site opportunities
                  </p>
                </div>
              </motion.div>
            )}

            {/* Social Links */}
            <motion.div custom={5} variants={fadeUp} className="flex gap-3 pt-4">
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
                  className="p-3 rounded-full bg-[var(--bg-secondary)] border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-5 p-6 sm:p-8 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border)]"
              noValidate
            >
              {/* Name */}
              <div>
                <label htmlFor="contact-name" className="block text-sm font-medium text-[var(--text-primary)] mb-1.5">
                  Full Name
                </label>
                <input
                  id="contact-name"
                  name="user_name"
                  type="text"
                  placeholder="John Doe"
                  className={`w-full px-4 py-3 rounded-lg bg-[var(--bg-primary)] border ${
                    errors.user_name ? 'border-red-500' : 'border-[var(--border)]'
                  } text-[var(--text-primary)] placeholder-[var(--text-secondary)]/50 focus:outline-none focus:border-[var(--accent)] transition-colors`}
                />
                {errors.user_name && (
                  <p className="text-red-400 text-xs mt-1">{errors.user_name}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium text-[var(--text-primary)] mb-1.5">
                  Email Address
                </label>
                <input
                  id="contact-email"
                  name="user_email"
                  type="email"
                  placeholder="john@example.com"
                  className={`w-full px-4 py-3 rounded-lg bg-[var(--bg-primary)] border ${
                    errors.user_email ? 'border-red-500' : 'border-[var(--border)]'
                  } text-[var(--text-primary)] placeholder-[var(--text-secondary)]/50 focus:outline-none focus:border-[var(--accent)] transition-colors`}
                />
                {errors.user_email && (
                  <p className="text-red-400 text-xs mt-1">{errors.user_email}</p>
                )}
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="contact-subject" className="block text-sm font-medium text-[var(--text-primary)] mb-1.5">
                  Subject
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  placeholder="Project collaboration"
                  className={`w-full px-4 py-3 rounded-lg bg-[var(--bg-primary)] border ${
                    errors.subject ? 'border-red-500' : 'border-[var(--border)]'
                  } text-[var(--text-primary)] placeholder-[var(--text-secondary)]/50 focus:outline-none focus:border-[var(--accent)] transition-colors`}
                />
                {errors.subject && (
                  <p className="text-red-400 text-xs mt-1">{errors.subject}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-[var(--text-primary)] mb-1.5">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project or idea..."
                  className={`w-full px-4 py-3 rounded-lg bg-[var(--bg-primary)] border ${
                    errors.message ? 'border-red-500' : 'border-[var(--border)]'
                  } text-[var(--text-primary)] placeholder-[var(--text-secondary)]/50 focus:outline-none focus:border-[var(--accent)] transition-colors resize-none`}
                />
                {errors.message && (
                  <p className="text-red-400 text-xs mt-1">{errors.message}</p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={sending}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)] text-white font-semibold hover:shadow-lg hover:shadow-[var(--accent)]/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {sending ? (
                  <>
                    <FaSpinner className="w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Toast */}
      {toast && (
        <div className={`toast ${toast.type === 'success' ? 'toast-success' : 'toast-error'}`}>
          {toast.text}
        </div>
      )}
    </section>
  );
}

import { motion } from "framer-motion";
import { ArrowUp, Mail, Linkedin, Github } from "lucide-react";
import config from "../config";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
  };

  const socialLinks = [
    {
      icon: Mail,
      href: "mailto: "+config.contact.email,
      label: "Email",
      color: "text-purple-400 hover:text-purple-300",
    },
    {
      icon: Linkedin,
      href: config.contact.linkedinUrl,
      label: "LinkedIn",
      color: "text-blue-400 hover:text-blue-300",
    },
    {
      icon: Github,
      href: config.contact.githubUrl,
      label: "GitHub",
      color: "text-slate-300 hover:text-slate-100",
    },
  ];

  return (
    <footer className="relative border-t border-indigo-500/30 mt-24 bg-gradient-to-b from-slate-800 to-slate-900 py-12">
      {/* Animated Background Glow */}
      <motion.div
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-gradient-to-b from-indigo-600 to-transparent blur-3xl opacity-20"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* FOOTER CONTENT */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-6">
          {/* Left: Social Links */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex gap-4"
          >
            {socialLinks.map((social) => {
              const Icon = social.icon;
              const isMail = social.label === "Email";
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  {...(!isMail && { target: "_blank", rel: "noopener noreferrer" })}
                  whileHover={{ scale: 1.2, y: -4 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-2.5 rounded-lg bg-slate-800/50 border border-slate-700/50 ${social.color} hover:border-indigo-500/50 transition`}
                  title={social.label}
                >
                  <Icon size={18} />
                </motion.a>
              );
            })}
          </motion.div>

          {/* Center: Copyright Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center flex-1"
          >
            <p className="text-slate-300 text-sm font-medium mb-1">
              © {currentYear} • Designed & Built by Tanish Verma❤️
            </p>
            <p className="text-slate-400 text-xs">
              Built with React •  Tailwind • Framer Motion
            </p>
          </motion.div>

          {/* Right: Back to Top Button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.15, y: -3 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold text-sm rounded-lg hover:from-indigo-500 hover:to-purple-500 transition shadow-lg whitespace-nowrap"
          >
            <ArrowUp size={16} />
            Top
          </motion.button>
        </div>

        {/* DIVIDER */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent origin-center"
        />
      </div>
    </footer>
  );
}
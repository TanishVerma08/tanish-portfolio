import { motion } from "framer-motion";
import {
  Code2,
  Server,
  Database,
  BarChart3,
  Lock,
  Zap,
} from "lucide-react";
import backgroundImage from "../Backgroundimage.jpg";

const whatIDoItems = [
  {
    title: "Full-Stack Application Development",
    desc:
      "Build complete web applications using ASP.NET MVC/Core, Angular/React, and SQL Server — handling everything from database design to frontend integration.",
    icon: Code2,
  },
  {
    title: "Backend Engineering & APIs",
    desc:
      "Design secure, scalable backend systems with REST APIs, authentication & authorization, business logic, and optimized database queries.",
    icon: Server,
  },
  {
    title: "Database & Performance Optimization",
    desc:
      "Work extensively with SQL Server and MySQL — writing optimized queries, stored procedures, and schemas that scale with real usage.",
    icon: Database,
  },
  {
    title: "Reporting & Business Workflows",
    desc:
      "Implement data-driven reporting systems using Crystal Reports and integrate business workflows like attendance and reporting.",
    icon: BarChart3,
  },
  {
    title: "Secure Systems & Access Control",
    desc:
      "Implement authentication, authorization, role-based access control, and secure application flows following best practices.",
    icon: Lock,
  },
  {
    title: "Real-World Product Development",
    desc:
      "Experience working on live systems used by real users, focusing on maintainability, clarity, and long-term scalability.",
    icon: Zap,
  },
];

export default function Home() {
  return (
    <div className="space-y-24 md:space-y-32">

      {/* ================= HERO ================= */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative overflow-hidden rounded-3xl shadow-2xl"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-800/75 to-indigo-900/70" />

        {/* Animated Background Elements */}
        <motion.div
          animate={{ y: [0, -20, 0], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-600/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl"
        />

        {/* Content */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center px-6 sm:px-10 py-16 md:py-24"
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <motion.div
              className="inline-block px-4 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/50 mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              <p className="text-sm font-semibold text-indigo-300">Welcome to my portfolio</p>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
              Full-Stack Developer crafting{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">
                reliable systems
              </span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-slate-200 max-w-xl leading-relaxed">
              I design and build end-to-end web applications — from robust backend architectures to clean, user-friendly interfaces — with a strong focus on performance, security, and real-world usability.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <motion.button
                onClick={() => {
                  const element = document.getElementById("projects");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(79, 70, 229, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all cursor-pointer"
              >
                View My Projects
              </motion.button>

              <motion.button
                onClick={() => {
                  const element = document.getElementById("contact");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                whileHover={{ y: -4, borderColor: "#818cf8", backgroundColor: "rgba(79, 70, 229, 0.1)" }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex justify-center px-8 py-4 rounded-xl border-2 border-indigo-400/50 bg-white/10 text-white font-semibold backdrop-blur-sm hover:backdrop-blur-md transition-all cursor-pointer"
              >
                Let's Connect
              </motion.button>
            </div>
          </motion.div>

          {/* Right side decorative element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="hidden md:flex justify-center"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-64 h-64 bg-gradient-to-br from-indigo-500/30 to-blue-500/20 rounded-3xl blur-2xl"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 w-64 h-64 bg-gradient-to-tr from-blue-500/20 to-indigo-500/30 rounded-3xl blur-2xl"
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* ================= WHAT I DO ================= */}
      <section className="space-y-6">
        <div className="text-center md:text-left">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4"
          >
            What I <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">Specialize In</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-slate-600 text-sm sm:text-base max-w-2xl"
          >
            Building enterprise-grade solutions with modern technologies
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whatIDoItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8, boxShadow: "0 25px 50px rgba(79, 70, 229, 0.15)" }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="group bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 hover:border-indigo-300 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="inline-block p-3 bg-gradient-to-br from-indigo-100 to-blue-100 rounded-xl mb-4 group-hover:from-indigo-200 group-hover:to-blue-200 transition-all"
                >
                  <Icon className="text-indigo-600 w-6 h-6" />
                </motion.div>
                <h3 className="font-semibold text-slate-900 mb-3 text-sm sm:text-base leading-tight">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ================= APPROACH ================= */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 rounded-3xl p-6 sm:p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-start shadow-2xl overflow-hidden relative">
        {/* Animated background elements */}
        <motion.div
          animate={{ opacity: [0.05, 0.15, 0.05] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute -top-32 -right-32 w-96 h-96 bg-indigo-500 rounded-full blur-3xl"
        />
        
        <div className="relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold text-white mb-6"
          >
            How I Approach <span className="bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">Development</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-slate-300 leading-relaxed text-sm sm:text-base mb-4"
          >
            I believe good software is built by understanding both the technical
            requirements and the business context. Before writing code, I focus
            on clearly understanding the problem, the users involved, and the
            expected outcomes.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-slate-300 leading-relaxed text-sm sm:text-base"
          >
            My approach emphasizes writing clean, readable, and maintainable
            code, designing systems that can scale over time, and choosing
            solutions that balance performance, security, and simplicity.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ y: -6 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative z-10 bg-white/10 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-white/20 shadow-xl hover:border-indigo-300/50 transition-all"
        >
          <div className="space-y-4">
            {[
              "✓ Clean architecture & maintainable code",
              "✓ Strong backend foundations",
              "✓ Thoughtful database design",
              "✓ Performance-aware development",
              "✓ Practical, real-world solutions"
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-3"
              >
                <span className="text-indigo-400 text-lg font-bold flex-shrink-0">✓</span>
                <span className="text-white text-sm leading-relaxed">{item.replace('✓ ', '')}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

    </div>
  );
}

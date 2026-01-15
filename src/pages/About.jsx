import { motion } from "framer-motion";
import {
  Briefcase,
  BookOpen,
  Code,
  Target,
  Shield,
  Zap,
} from "lucide-react";
import { Helmet } from "react-helmet-async";

export default function About() {
  const skills = [
    {
      title: "Full-Stack Web Development",
      desc:
        "Develop complete web applications by combining backend logic with clean, responsive frontend interfaces.",
      icon: Code,
    },
    {
      title: "Backend & APIs",
      desc:
        "Build secure backend systems using ASP.NET MVC/Core, REST APIs, authentication, and authorization.",
      icon: Briefcase,
    },
    {
      title: "Database Design & Optimization",
      desc:
        "Design scalable databases and write optimized queries, procedures, and schemas for real-world use.",
      icon: Target,
    },
    {
      title: "Responsive UI Development",
      desc:
        "Create responsive, user-friendly interfaces that work seamlessly across desktop and mobile devices.",
      icon: Zap,
    },
    {
      title: "Secure & Maintainable Systems",
      desc:
        "Follow best practices to build clean, secure, and maintainable applications with long-term scalability.",
      icon: Shield,
    },
    {
      title: "Production-Ready Applications",
      desc:
        "Comfortable working on live systems with real users, focusing on reliability and business requirements.",
      icon: BookOpen,
    },
  ];

  return (
    <>
      <Helmet>
        <title>About Tanish Verma - Full Stack Developer</title>
        <meta name="description" content="Learn about Tanish Verma, a skilled full-stack developer with expertise in React, Node.js, ERP systems, and modern web technologies. Discover my skills and experience." />
        <meta name="keywords" content="about Tanish Verma, full stack developer, skills, experience, React, Node.js, ERP" />
        <meta property="og:title" content="About Tanish Verma - Full Stack Developer" />
        <meta property="og:description" content="Learn about Tanish Verma, a skilled full-stack developer with expertise in React, Node.js, ERP systems, and modern web technologies." />
        <meta property="og:url" content="https://tanish-verma-portfolio.vercel.app/about" />
        <meta property="twitter:title" content="About Tanish Verma - Full Stack Developer" />
        <meta property="twitter:description" content="Learn about Tanish Verma, a skilled full-stack developer with expertise in React, Node.js, ERP systems, and modern web technologies." />
      </Helmet>
      <div className="space-y-16">
      <section className="max-w-4xl">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-8"
        >
          About <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">Me</span>
        </motion.h2>

        {/* Main Content */}
        <div className="space-y-6 sm:space-y-7">
          {[
            {
              title: "Current Role",
              text: "I am a Software Engineer currently working at Cybrain Software Solutions, where I contribute to the development of real-world, enterprise-level applications. My work primarily involves building and maintaining ERP-based systems used in day-to-day organizational operations.",
              icon: "🚀",
            },
            {
              title: "Work Experience",
              text: "At Cybrain Software Solutions, I have hands-on experience working on modules such as report automation, visitor management systems, and database-driven workflows. This role has helped me understand how production systems are designed, optimized, and maintained for reliability, security, and scalability.",
              icon: "⚙️",
            },
            {
              title: "Internship Journey",
              text: "Prior to my current role, I completed a Full Stack Development internship at CS Infotech. During this internship, I worked across both backend and frontend development, gaining practical experience in building complete web applications, implementing authentication and authorization, and working with databases and APIs.",
              icon: "📚",
            },
            {
              title: "Education",
              text: "I completed my Bachelor of Technology in Computer Science from Government College Dharamshala. My academic journey helped me build a strong foundation in computer science concepts, problem-solving, and software development principles.",
              icon: "🎓",
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-slate-50 to-indigo-50 border border-slate-200 rounded-2xl p-6 sm:p-8 hover:border-indigo-300 hover:shadow-md transition-all"
            >
              <div className="flex gap-4">
                <span className="text-3xl flex-shrink-0">{item.icon}</span>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                    {item.text}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WHAT I CAN DO */}
      <section className="space-y-8">
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3"
          >
            What I Can <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">Do</span>
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-slate-600 text-sm sm:text-base"
          >
            A comprehensive skill set built through real-world projects and professional experience
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((item, index) => {
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
                <h4 className="font-semibold text-slate-900 mb-2 text-sm sm:text-base">
                  {item.title}
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
    </>
  );
}

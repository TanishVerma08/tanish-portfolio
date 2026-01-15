import { motion } from "framer-motion";
import { Briefcase, Calendar, ArrowRight } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      company: "Cybrain Software Solutions",
      position: "Software Engineer",
      duration: "July 2025 – Present",
      description: "Developing and maintaining ERP modules for enterprise systems",
      achievements: [
        "Developing and maintaining ERP modules for the Cyber School Management System used in real organizational workflows.",
        "Implemented automated report card generation using Crystal Reports to ensure accurate academic data representation.",
        "Designed and integrated a QR-based Visitor Management System to improve security and entry tracking.",
        "Optimized SQL queries and stored procedures to improve application performance and data reliability.",
      ],
      color: "from-indigo-600 to-blue-600",
    },
    {
      company: "CS Infotech",
      position: "Full Stack Intern",
      duration: "Jan 2025 – June 2025",
      description: "Building complete web applications with modern stack",
      achievements: [
        "Developed web applications using ASP.NET MVC and SQL Server, focusing on clean architecture and maintainable code.",
        "Worked extensively with Entity Framework and Identity Framework for authentication, authorization, and data access.",
        "Built RESTful APIs and integrated them with frontend components for seamless user experience.",
        "Created stored procedures and backend logic to support scalable application workflows.",
      ],
      color: "from-blue-600 to-cyan-600",
    },
  ];

  return (
    <div className="space-y-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
          My <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">Experience</span>
        </h2>
        <p className="text-slate-600 text-sm sm:text-base max-w-2xl">
          A journey of building production-ready systems and gaining hands-on experience with enterprise technologies
        </p>
      </motion.div>

      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.4, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="group relative bg-white border border-slate-200 hover:border-indigo-300 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
          >
            {/* Left Border Accent */}
            <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${exp.color}`} />

            <div className="p-6 sm:p-8">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Briefcase className="text-indigo-600 w-5 h-5" />
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                      {exp.company}
                    </h3>
                  </div>
                  <p className={`text-sm font-semibold bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}>
                    {exp.position}
                  </p>
                </div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 text-slate-500 text-sm bg-slate-100 px-4 py-2 rounded-lg w-fit"
                >
                  <Calendar size={16} />
                  <span>{exp.duration}</span>
                </motion.div>
              </div>

              <p className="text-slate-600 text-sm sm:text-base mb-6 leading-relaxed">
                {exp.description}
              </p>

              {/* Achievements */}
              <ul className="space-y-3">
                {exp.achievements.map((achievement, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                    viewport={{ once: true }}
                    className="flex gap-3 items-start text-slate-600 text-sm"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r ${exp.color} flex items-center justify-center mt-0.5`}
                    >
                      <ArrowRight className="text-white w-3 h-3" />
                    </motion.div>
                    <span>{achievement}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

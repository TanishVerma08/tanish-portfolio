import { motion } from "framer-motion";
import {  Code, Database, Server } from "lucide-react";


export default function Projects() {
  const projects = [
    {
      title: "Cyber School Manager (ERP)",
      description:
        "A comprehensive ERP-based school management system handling academic records, staff management, attendance, report cards, and secure visitor entry workflows.",
      achievements: [
        "Developed core ERP modules and business workflows",
        "Integrated Crystal Reports for report card generation",
        "Implemented QR-based Visitor Management System",
        "Optimized SQL queries and stored procedures",
      ],
      tech: ["ASP.NET MVC", "Angular", "SQL Server", "Crystal Reports"],
      icon: Server,
      color: "from-indigo-600 to-blue-600",
      link: "/projects/csm",
    },
    {
      title: "Book Shopping Web Application",
      description:
        "A CMS-driven e-commerce web application designed for managing books, users, and orders with a focus on security, performance, and clean user experience.",
      achievements: [
        "Implemented authentication and authorization using Identity",
        "Developed backend logic using ASP.NET Core and Entity Framework",
        "Designed database schema and optimized queries",
        "Developed complete CRUD functionality for books and categories",
      ],
      tech: ["ASP.NET Core", "Entity Framework", "SQL Server"],
      icon: Code,
      color: "from-blue-600 to-cyan-600",
    },
    {
      title: "National Park & Trail Booking System",
      description:
        "An API-driven system for managing national parks and trail bookings, focusing on availability management, visitor tracking, and secure role-based access.",
      achievements: [
        "Designed RESTful APIs using ASP.NET Core",
        "Integrated APIs with Angular frontend",
        "Implemented role-based authentication and authorization",
        "Deployed backend services on AWS infrastructure",
      ],
      tech: ["ASP.NET Core Web API", "Angular", "SQL Server", "AWS"],
      icon: Database,
      color: "from-cyan-600 to-teal-600",
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
          Featured <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">Projects</span>
        </h2>
        <p className="text-slate-600 text-sm sm:text-base max-w-2xl">
          Real-world applications showcasing full-stack development, database design, and architectural expertise
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 gap-6 sm:gap-8">
        {projects.map((project, index) => {
          const Icon = project.icon;
          return (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.4, delay: index * 0.12 }}
              viewport={{ once: true }}
              className="group bg-white border border-slate-200 hover:border-indigo-300 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300"
            >
              {/* Top Gradient Bar */}
              <div className={`h-1 bg-gradient-to-r ${project.color}`} />

              <div className="p-6 sm:p-8">
                {/* Header with Icon */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="inline-block p-3 bg-gradient-to-br from-indigo-100 to-blue-100 rounded-xl group-hover:from-indigo-200 group-hover:to-blue-200 transition-all"
                  >
                    <Icon className="text-indigo-600 w-6 h-6" />
                  </motion.div>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Achievements */}
                <div className="mb-6 pb-6 border-b border-slate-200">
                  <ul className="space-y-2">
                    {project.achievements.map((achievement, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + i * 0.05 }}
                        viewport={{ once: true }}
                        className="flex gap-2 items-start text-slate-600 text-sm"
                      >
                        <span className={`inline-block w-2 h-2 rounded-full mt-2 bg-gradient-to-r ${project.color} flex-shrink-0`} />
                        <span>{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack & CTA */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <motion.span
                        key={tech}
                        whileHover={{ y: -2 }}
                        className="px-3 py-1 text-xs font-medium text-indigo-600 bg-indigo-50 rounded-full border border-indigo-200"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {project.link && (
                    <motion.div
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {/* <Link
                        to={project.link}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition"
                      >
                        View Details <ExternalLink size={16} />
                      </Link> */}
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

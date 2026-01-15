import { Mail, Linkedin, Github, Phone, MessageSquare, Send } from "lucide-react";
import emailjs from "emailjs-com";
import { useState } from "react";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import config from "../config";


export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const handleSubmit = (e) => {
  e.preventDefault();

  Swal.fire({
    title: "Sending...",
    text: "Please wait while your message is being sent.",
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading();
    },
  });

  const templateParams = {
    ...formData,
    time: new Date().toLocaleString(),
  };

  emailjs
    .send(
      config.emailjs.serviceId,
      config.emailjs.templateId,
      templateParams,
      config.emailjs.publicKey
    )
    .then(() => {
      Swal.fire({
        icon: "success",
        title: "Message Sent!",
        text: "Thanks for reaching out. I’ll get back to you soon.",
        confirmButtonColor: "#4f46e5", // indigo-600
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    })
    .catch(() => {
      Swal.fire({
        icon: "error",
        title: "Something went wrong",
        text: "Failed to send message. Please try again later.",
        confirmButtonColor: "#4f46e5",
      });
    });
};


  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: config.contact.email,
      link: `mailto:${config.contact.email}`,
      color: "from-purple-600 to-pink-600",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "Connect with me",
      link: config.contact.linkedinUrl,
      external: true,
      color: "from-blue-600 to-cyan-600",
    },
    {
      icon: Github,
      title: "GitHub",
      value: "Check my work",
      link: config.contact.githubUrl,
      external: true,
      color: "from-slate-600 to-gray-600",
    },
  ];

  return (
    <section className="space-y-16">
      {/* INTRO */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl"
      >
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-8">
          Let's <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">Connect</span> 
        </h3>
        <p className="text-slate-400 text-lg">
          Have a project in mind? Want to discuss opportunities or just say hello? I'm always open to connecting with passionate people. Reach out and let's build something great together!
        </p>
      </motion.div>

      {/* CONTACT METHODS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 w-full">
        {contactMethods.map((method, index) => {
          const Icon = method.icon;
          return (
            <motion.a
              key={method.title}
              href={method.link}
              target={method.external ? "_blank" : undefined}
              rel={method.external ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="group relative rounded-lg p-4 bg-slate-800/40 border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-300 cursor-pointer"
            >
              {/* Content */}
              <div className="relative z-10 flex items-center gap-3">
                <div
                  className={`p-2 rounded-lg bg-gradient-to-br ${method.color} text-white flex-shrink-0`}
                >
                  <Icon size={16} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-semibold text-indigo-400 uppercase tracking-wider">{method.title}</p>
                  <p className="text-slate-300 text-xs font-medium mt-0.5 group-hover:text-slate-100 transition truncate">
                    {method.value}
                  </p>
                </div>
              </div>

              {/* Subtle background glow on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-lg`} />
            </motion.a>
          );
        })}
      </div>

      {/* CONTACT FORM */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8">

        <h3 className="text-lg font-semibold text-slate-900 mb-6">
          Let’s Work Together
        </h3>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="border rounded-lg px-4 py-2"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="border rounded-lg px-4 py-2"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone (optional)"
            value={formData.phone}
            onChange={handleChange}
            className="border rounded-lg px-4 py-2 sm:col-span-2"
          />

          <textarea
            name="message"
            placeholder="Tell me about your project..."
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            className="border rounded-lg px-4 py-2 sm:col-span-2"
          />

          <button
            type="submit"
            className="sm:col-span-2 bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-500 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

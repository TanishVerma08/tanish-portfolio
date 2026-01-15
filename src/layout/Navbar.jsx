import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar({ activeSection }) {
  const [open, setOpen] = useState(false);

  const links = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-slate-800/95 backdrop-blur border-b border-slate-700">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* BRAND */}
        <button
          onClick={() => handleScroll("home")}
          className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-100 hover:opacity-80 transition cursor-pointer"
        >
          Tanish <span className="text-indigo-400">Verma</span>
        </button>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-10 text-sm font-medium">
          {links.map(link => (
            <button
              key={link.id}
              onClick={() => handleScroll(link.id)}
              className={`relative pb-1 transition ${
                activeSection === link.id
                  ? "text-indigo-400"
                  : "text-slate-300 hover:text-slate-100"
              }`}
            >
              {link.label}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] w-full rounded transition-all duration-300 ${
                  activeSection === link.id
                    ? "bg-indigo-400 scale-x-100"
                    : "bg-indigo-400 scale-x-0 group-hover:scale-x-100"
                }`}
              />
            </button>
          ))}
        </div>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-slate-300 hover:text-slate-100"
          aria-label="Toggle Menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-slate-800 border-t border-slate-700">
          <div className="px-6 py-6 space-y-4">
            {links.map(link => (
              <button
                key={link.id}
                onClick={() => handleScroll(link.id)}
                className={`block w-full text-left text-base font-medium ${
                  activeSection === link.id
                    ? "text-indigo-400"
                    : "text-slate-300 hover:text-slate-100"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

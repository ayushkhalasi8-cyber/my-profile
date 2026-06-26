import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  FaHome,
  FaUser,
  FaBriefcase,
  FaPhoneAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { path: "/", name: "Home", icon: <FaHome /> },
    { path: "/about", name: "About", icon: <FaUser /> },
    { path: "/experience", name: "Experience", icon: <FaBriefcase /> },
    { path: "/contact", name: "Contact", icon: <FaPhoneAlt /> },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-950/90 backdrop-blur-lg border-b border-slate-800 z-50 shadow-lg">
      <div className="max-w-10xl mx-auto flex items-center justify-between h-16 px-30">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-cyan-400 tracking-wide"
        >
          My Portfolio
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">

          {navLinks.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                  isActive
                    ? "bg-cyan-500 text-white"
                    : "text-gray-300 hover:bg-slate-800 hover:text-cyan-400"
                }`
              }
            >
              {item.icon}
              {item.name}
            </NavLink>
          ))}

        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="bg-slate-900 border-t border-slate-800">

          {navLinks.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-6 py-4 transition-all duration-300 ${
                  isActive
                    ? "bg-cyan-500 text-white"
                    : "text-gray-300 hover:bg-slate-800 hover:text-cyan-400"
                }`
              }
            >
              {item.icon}
              {item.name}
            </NavLink>
          ))}

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
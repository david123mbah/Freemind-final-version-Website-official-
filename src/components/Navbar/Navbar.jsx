import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Therapists", path: "/therapists" },
    { name: "Resources", path: "/resources" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.nav
      className="bg-[#F7F6F4] font-bricolage"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left nav links (fixed width) */}
          <div className="hidden md:flex items-center w-1/3 justify-end">
            {navLinks.slice(0, 3).map((link, index) => (
              <a
                key={index}
                href={link.path}
                className="text-[#00373E] hover:text-[#004a54] px-4 py-2 text-sm font-medium transition-colors font-bricolage"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Center logo */}
          <div className="flex-shrink-0 text-center w-1/3">
            <a
              href="/"
              className="font-bold text-2xl text-[#00373E] hover:text-[#004a54] transition-colors font-bricolage"
            >
              Freemind
            </a>
          </div>

          {/* Right nav links (fixed width) */}
          <div className="hidden md:flex items-center w-1/3 justify-start">
            {navLinks.slice(3).map((link, index) => (
              <a
                key={index}
                href={link.path}
                className="text-[#00373E] hover:text-[#004a54] px-4 py-2 text-sm font-medium transition-colors font-bricolage"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center ml-auto">
            <button className="p-2 rounded-md text-[#00373E] hover:text-[#004a54] focus:outline-none transition-colors font-bricolage">
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;

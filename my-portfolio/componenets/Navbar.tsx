"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ];

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      className={`fixed w-full z-50 top-0 left-0 transition-colors duration-300`}
    >
      {/* Desktop Navigation */}
      <ul className="hidden md:flex justify-center gap-4">
        {navItems.map((item, i) => (
          <motion.li
            key={item.label}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i, duration: 0.5 }}
          >
            <button
              onClick={() => handleNavClick(item.id)}
              className="relative text-foreground/80 hover:text-foreground px-3 py-2 rounded-md group overflow-hidden"
            >
              <span className="relative z-10 text-lg">{item.label}</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity"
                initial={false}
                whileHover={{ scale: 1.05 }}
              />
            </button>
          </motion.li>
        ))}
      </ul>

      {/* Mobile menu button */}
      <div className="flex items-center gap-2 md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-foreground p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
          aria-label="Toggle menu"
        >
          {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 top-16 bg-background/95 backdrop-blur-lg md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.ul
              className="flex flex-col items-center justify-center bg-background/95 backdrop-blur-lg  h-screen gap-6 py-10"
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              exit={{ y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {navItems.map((item, i) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ delay: 0.1 * i, duration: 0.4 }}
                  className="w-full"
                >
                  <button
                    className="text-xl font-medium py-6 px-8 rounded-lg hover:bg-accent/50 transition-colors w-full"
                    onClick={() => handleNavClick(item.id)}
                  >
                    {item.label}
                  </button>
                </motion.li>
              ))}
            </motion.ul>

            {/* Close hint */}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

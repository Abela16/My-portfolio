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
    { label: "Skills", id: "skills" },
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
      className="fixed left-0 top-0 z-50 w-full transition-colors duration-300"
    >
      {/* Mobile: same tone as desktop bar, semi-transparent + blur */}
      <div className="flex items-center justify-end border-b border-white/[0.06] bg-[#181518]/55 px-4 py-3 backdrop-blur-xl md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-md p-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
          aria-label="Toggle menu"
        >
          {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </div>

      <motion.ul
        className="mx-auto mt-4 hidden max-w-4xl items-center justify-center gap-10 rounded-3xl border border-white/[0.08] bg-[#1c192e] py-2 shadow-lg shadow-black/20 backdrop-blur-xl md:flex"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
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
                className="absolute inset-0 bg-[#2b393b] opacity-0 group-hover:opacity-100 transition-opacity"
                initial={false}
                whileHover={{ scale: 1.05 }}
              />
            </button>
          </motion.li>
        ))}
      </motion.ul>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 top-14 bg-background/90 backdrop-blur-xl md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.ul
              className="flex h-[calc(100dvh-3.5rem)] flex-col items-center justify-center gap-6 bg-background/90 py-10 backdrop-blur-xl"
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
            
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

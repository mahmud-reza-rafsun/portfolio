"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import {
  FiUser,
  FiCode,
  FiLayers,
  FiMail,
} from "react-icons/fi";
import { SunMedium, Moon } from "lucide-react";
import { IoHomeOutline } from "react-icons/io5";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", icon: <IoHomeOutline />, label: "Home" },
    { href: "#about", icon: <FiUser />, label: "About" },
    { href: "#skills", icon: <FiCode />, label: "Skills" },
    { href: "#project", icon: <FiLayers />, label: "Projects" },
    { href: "#contact", icon: <FiMail />, label: "Contact" },
  ];

  const toggleTheme = () =>
    setTheme(theme === "dark" ? "light" : "dark");

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full px-4">
      <div
        className={`mx-auto max-w-6xl flex items-center justify-between px-4 py-2 rounded-full glass border transition-all duration-300
    bg-white/70 dark:bg-[#0b1220]/70 backdrop-blur-xl border-gray-300/40 dark:border-gray-700/50`}
      >
        {/* LEFT: Logo */}
        <Link href="/" className="font-bold text-lg px-2">
          R
        </Link>

        {/* CENTER: Nav Links */}
        <div className="flex items-center gap-1">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center gap-2 px-4 py-2 text-sm rounded-full text-gray-700 dark:text-gray-300 hover:bg-black/5 dark:hover:bg-white/10 transition"
            >
              {item.icon}
              <span className="hidden sm:inline">{item.label}</span>
            </Link>
          ))}
        </div>

        {/* RIGHT: Theme */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full cursor-pointer hover:bg-black/5 dark:hover:bg-white/10 transition"
        >
          {theme === "dark" ? <SunMedium size={18} /> : <Moon size={18} />}
        </button>
      </div>
    </div>
  );
};

export default Navbar;

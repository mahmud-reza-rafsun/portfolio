"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X, ExternalLink, Sun, Moon } from 'lucide-react';
import Link from 'next/link';
import { useTheme } from 'next-themes';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  const navLinks = [
    { href: "#skills", text: "Skills" },
    { href: "#about", text: "About" },
    { href: "#project", text: "Project" },
    { href: "#contact", text: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300  backdrop-blur-2xl ${isScrolled
        ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border-b dark:border-b-0"
        : "bg-transparent shadow-none"
        }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 max-w-7xl xl:mr-64">
        <div className="flex h-14 sm:h-16 lg:h-16 items-center justify-between z-50">

          {/* Logo */}
          <div className="flex items-center w-[25%]">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 bg-gray-900 dark:bg-orange-500 rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
                <span className="text-white font-light dark:text-gray-100 text-base sm:text-lg lg:text-xl">R</span>
              </div>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-6 xl:space-x-8 w-[45%]">
            {navLinks.map(link => (
              <a
                key={link.text}
                href={link.href}
                className="text-sm lg:text-base font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-orange-500 transition-colors relative group"
              >
                {link.text}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 dark:bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-3 w-[33%]">
            <a
              href="#"
              className="flex items-center space-x-1.5 lg:space-x-2 px-3 lg:px-4 py-1.5 lg:py-2 text-xs lg:text-sm font-medium text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-all hover:shadow-md"
            >
              <span>Resume</span>
              <ExternalLink className="h-3 w-3 lg:h-4 lg:w-4" />
            </a>

            <button className="px-4 lg:px-6 py-1.5 lg:py-2 text-xs lg:text-sm font-semibold bg-gray-900 text-white dark:bg-orange-600 dark:text-white rounded-md hover:bg-gray-800 dark:hover:bg-orange-600 transition-all shadow-sm hover:shadow-lg transform hover:scale-105 cursor-pointer">
              Hire Me
            </button>
            {/* Dark/Light theme toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

          </div>

          <div className='flex items-center justify-center'>
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
            </button>
            {/* Dark/Light theme toggle */}
            <button
              onClick={toggleTheme}
              className="md:hidden p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="py-4 border-t border-gray-200 dark:border-gray-800">
            <div className="flex flex-col space-y-1">
              {navLinks.map(link => (
                <a
                  key={link.text}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="px-3 py-2.5 text-sm sm:text-base font-medium text-gray-600 dark:text-gray-300 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  {link.text}
                </a>
              ))}
              <div className="pt-4 mt-2 border-t border-gray-200 dark:border-gray-700 flex flex-col space-y-2">
                <a
                  href="#"
                  className="flex items-center justify-center space-x-2 px-3 py-2.5 text-sm font-medium border border-gray-300 dark:border-gray-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <span>Resume</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
                <button className="px-3 py-2.5 text-sm font-medium bg-gray-900 text-white dark:bg-gray-50 dark:text-gray-900 rounded-md hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">
                  Hire Me
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

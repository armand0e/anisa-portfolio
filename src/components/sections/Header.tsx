"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
};

export default function Header() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav 
      variants={headerVariants}
      initial="hidden"
      animate="visible"
      className="flex justify-between items-center py-6 px-8 md:px-16 lg:px-24 sticky top-0 bg-stone-50/80 backdrop-blur-sm z-50"
    >
      <Link href="/" className="text-2xl font-playfair font-bold text-stone-900 hover:text-stone-700 transition-colors">
        Anisa Rafiee
      </Link>
      
      <div className="hidden md:flex space-x-8 text-stone-600">
        <button 
          onClick={() => scrollToSection('home')}
          className="hover:text-stone-900 transition-colors"
        >
          Home
        </button>
        <button 
          onClick={() => scrollToSection('about')}
          className="hover:text-stone-900 transition-colors"
        >
          About
        </button>
        <button 
          onClick={() => scrollToSection('skills')}
          className="hover:text-stone-900 transition-colors"
        >
          Skills
        </button>
        <button 
          onClick={() => scrollToSection('experience')}
          className="hover:text-stone-900 transition-colors"
        >
          Experience
        </button>
        <button 
          onClick={() => scrollToSection('education')}
          className="hover:text-stone-900 transition-colors"
        >
          Education
        </button>
        <button 
          onClick={() => scrollToSection('contact')}
          className="hover:text-stone-900 transition-colors"
        >
          Contact
        </button>
      </div>
      
      <div className="flex space-x-4">
        <Link 
          href="https://www.instagram.com/anisarafiee?igsh=Z3JjOTNpMGF2emRn" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-stone-600 hover:text-stone-900 transition-colors"
          aria-label="Instagram"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        </Link>
        
        <Link 
          href="https://www.linkedin.com/in/anisa-rafiee-108559225/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-stone-600 hover:text-stone-900 transition-colors"
          aria-label="LinkedIn"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </Link>
        
        <Link 
          href="mailto:anisa.rafiee@gmail.com" 
          className="text-stone-600 hover:text-stone-900 transition-colors"
          aria-label="Email"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
          </svg>
        </Link>
      </div>
    </motion.nav>
  );
} 
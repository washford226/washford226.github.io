import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 ${
      isScrolled 
        ? 'bg-slate-900/98 backdrop-blur-lg shadow-2xl py-2 border-b border-slate-700/30' 
        : 'bg-slate-900/95 backdrop-blur-lg'
    }`}>
      <div className="max-w-6xl mx-auto px-8 flex justify-between items-center">
        <div className="logo">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            William Ashford
          </h2>
        </div>
        
        <nav className={`${
          isMobileMenuOpen 
            ? 'flex flex-col absolute top-full left-0 right-0 bg-slate-900/98 backdrop-blur-lg p-4 shadow-2xl translate-y-0 opacity-100 visible border-b border-slate-700/30' 
            : 'hidden md:flex flex-row gap-8'
        } transition-all duration-300 ${!isMobileMenuOpen && 'md:translate-y-0 md:opacity-100 md:visible'}`}>
          <button 
            onClick={() => scrollToSection('home')}
            className="text-slate-300 hover:text-blue-400 hover:bg-slate-800/50 font-medium px-4 py-2 rounded-lg transition-all duration-300 hover-lift"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="text-slate-300 hover:text-blue-400 hover:bg-slate-800/50 font-medium px-4 py-2 rounded-lg transition-all duration-300 hover-lift"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('projects')}
            className="text-slate-300 hover:text-blue-400 hover:bg-slate-800/50 font-medium px-4 py-2 rounded-lg transition-all duration-300 hover-lift"
          >
            Projects
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-slate-300 hover:text-blue-400 hover:bg-slate-800/50 font-medium px-4 py-2 rounded-lg transition-all duration-300 hover-lift"
          >
            Contact
          </button>
        </nav>

        <button 
          className="md:hidden text-slate-300 hover:text-blue-400 p-2 text-xl transition-colors duration-300"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>
    </header>
  );
};

export default Header;
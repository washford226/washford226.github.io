import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/washford226',
      icon: 'fab fa-github'
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/william-ashford-b77bb034a/',
      icon: 'fab fa-linkedin'
    },
    {
      name: 'Email',
      href: 'mailto:williamashford22604@gmail.com',
      icon: 'fas fa-envelope'
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="gradient-bg-primary text-slate-100 pt-12 border-t border-slate-700/30">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">William Ashford</h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              Full-Stack Developer passionate about creating scalable, 
              user-centered applications with modern technologies.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : '_self'}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : ''}
                  aria-label={link.name}
                  className="flex items-center justify-center w-10 h-10 glass text-slate-300 rounded-full hover:bg-blue-600 hover:text-white hover:-translate-y-1 transition-all duration-300 border border-slate-600/30"
                >
                  <i className={link.icon}></i>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.href)}
                  className="text-slate-300 hover:text-blue-400 transition-colors text-left py-1 hover:-translate-x-1 transition-all duration-300"
                >
                  {link.name}
                </button>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Skills</h4>
            <div className="flex flex-col gap-2">
              {['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'React Native', 'Mobile Development'].map((skill) => (
                <span key={skill} className="glass text-slate-300 px-3 py-1 rounded text-sm hover:bg-slate-700 hover:text-slate-100 transition-all duration-300 w-fit border border-slate-600/30">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Get In Touch</h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-slate-300">
                <i className="fas fa-envelope text-blue-400 w-4"></i>
                <span className="text-sm">williamashford22604@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <i className="fas fa-phone text-green-400 w-4"></i>
                <span className="text-sm">(618) 771-0402</span>
              </div>
              <button 
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/William Ashford Resume.pdf';
                  link.download = 'William Ashford Resume.pdf';
                  link.click();
                }}
                className="flex items-center gap-2 text-slate-300 hover:text-purple-400 transition-colors text-sm hover:-translate-x-1 transition-all duration-300"
              >
                <i className="fas fa-file-download text-purple-400 w-4"></i>
                <span>Download Resume</span>
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700/30 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              &copy; {currentYear} William Ashford. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-slate-400 text-sm">
              <span>Built with React & Tailwind CSS</span>
              <span>•</span>
              <button 
                onClick={scrollToTop} 
                className="flex items-center gap-1 hover:text-blue-400 transition-colors hover:-translate-y-1 transition-all duration-300"
              >
                <i className="fas fa-arrow-up text-xs"></i>
                Back to Top
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
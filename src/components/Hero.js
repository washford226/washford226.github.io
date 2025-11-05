import React from 'react';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center gradient-bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/80 to-slate-900/90 z-10"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 z-5">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-500/10 rounded-full blur-xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-pink-500/10 rounded-full blur-xl animate-float" style={{animationDelay: '4s'}}></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left">
            <p className="text-xl mb-2 text-slate-300">Hello, I'm</p>
            <h1 className="text-5xl lg:text-6xl font-bold mb-2 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
              William Ashford
            </h1>
            <h2 className="text-2xl lg:text-3xl font-medium mb-6 text-slate-200">
              Full-Stack Developer
            </h2>
            <p className="text-lg lg:text-xl leading-relaxed mb-8 text-slate-300">
              I create scalable, user-centered applications with clean architecture. 
              Experienced in React, Node.js, and mobile development with a proven track 
              record of launching production-ready software including my iOS app
              <strong className="text-blue-400"> Shareable Meals</strong> on the App Store.
            </p>
            
            <div className="flex flex-wrap gap-2 mb-8 justify-center lg:justify-start">
              {['React', 'Node.js', 'PostgreSQL', 'React Native', 'TypeScript'].map((tech) => (
                <span key={tech} className="glass px-4 py-2 rounded-full text-sm border border-slate-600/30 text-slate-200 hover:border-blue-400/50 transition-all duration-300">
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start">
              <button 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-2xl animate-glow"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
              </button>
              <button 
                className="bg-transparent border-2 border-slate-600 text-slate-200 px-8 py-4 rounded-lg font-semibold hover:bg-slate-800 hover:border-blue-400 hover:-translate-y-1 transition-all duration-300"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </button>
            </div>
            
            <div className="flex gap-4 justify-center lg:justify-start">
              {[
                { href: 'https://github.com/washford226', icon: 'fab fa-github', label: 'GitHub' },
                { href: 'https://www.linkedin.com/in/william-ashford-b77bb034a/', icon: 'fab fa-linkedin', label: 'LinkedIn' },
                { href: 'mailto:williamashford22604@gmail.com', icon: 'fas fa-envelope', label: 'Email' }
              ].map((link) => (
                <a 
                  key={link.label}
                  href={link.href} 
                  target={link.href.startsWith('http') ? '_blank' : '_self'}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : ''}
                  aria-label={link.label}
                  className="flex items-center justify-center w-12 h-12 glass text-slate-300 rounded-full hover:bg-blue-600 hover:text-white hover:-translate-y-1 transition-all duration-300 text-lg hover:shadow-lg"
                >
                  <i className={link.icon}></i>
                </a>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center items-center">
            <div className="glass rounded-xl p-8 border border-slate-600/30 max-w-md w-full hover-lift">
              <div className="flex items-center mb-4 pb-4 border-b border-slate-600/30">
                <div className="flex gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-400"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                  <span className="w-3 h-3 rounded-full bg-green-400"></span>
                </div>
                <span className="ml-4 text-slate-400 text-sm">portfolio.js</span>
              </div>
              
              <div className="font-mono text-sm leading-relaxed">
                <div className="code-line mb-2">
                  <span className="keyword">const</span> 
                  <span className="variable"> developer</span> 
                  <span className="operator"> = </span>
                  <span className="string">"William Ashford"</span>
                </div>
                <div className="code-line mb-2">
                  <span className="keyword">let</span> 
                  <span className="variable"> skills</span> 
                  <span className="operator"> = </span>
                  <span className="bracket">[</span>
                </div>
                <div className="code-line mb-2 pl-8">
                  <span className="string">"React"</span>,
                </div>
                <div className="code-line mb-2 pl-8">
                  <span className="string">"Node.js"</span>,
                </div>
                <div className="code-line mb-2 pl-8">
                  <span className="string">"PostgreSQL"</span>,
                </div>
                <div className="code-line mb-2 pl-8">
                  <span className="string">"Mobile Development"</span>
                </div>
                <div className="code-line">
                  <span className="bracket">]</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
import React from 'react';

const Contact = () => {
  const socialLinks = [
    {
      icon: 'fab fa-github',
      title: 'GitHub',
      link: 'https://github.com/washford226',
      color: 'hover:bg-gray-900',
      description: 'View my code and open source contributions'
    },
    {
      icon: 'fab fa-linkedin',
      title: 'LinkedIn',
      link: 'https://www.linkedin.com/in/william-ashford-b77bb034a/',
      color: 'hover:bg-blue-600',
      description: 'Connect with me professionally'
    }
  ];

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/William Ashford Resume.pdf';
    link.download = 'William Ashford Resume.pdf';
    link.click();
  };

  return (
    <section id="contact" className="py-24 gradient-bg-secondary">
      <div className="max-w-4xl mx-auto px-8 text-center">
        <div className="mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Let's Start a Conversation</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            I'm currently seeking opportunities as a Software Developer and would love to hear about your projects. Whether you're looking for a full-stack developer, mobile app specialist, or someone with experience in modern web technologies, I'm here to help bring your ideas to life.
          </p>
        </div>

        <div className="glass p-12 rounded-2xl border border-slate-600/30 mb-12 hover-lift">
          <div className="mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 font-semibold text-lg">Available for New Opportunities</span>
            </div>
            <p className="text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Currently open to full-time positions, contract work, and freelance projects. 
              Particularly interested in roles involving React, Node.js, and mobile development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600/20 border border-blue-500/30 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-blue-600/30 transition-all duration-300">
                <i className="fas fa-envelope text-2xl text-blue-400"></i>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <a 
                href="mailto:williamashford22604@gmail.com" 
                className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
              >
                williamashford22604@gmail.com
              </a>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600/20 border border-green-500/30 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-green-600/30 transition-all duration-300">
                <i className="fas fa-phone text-2xl text-green-400"></i>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
              <a 
                href="tel:+16187710402" 
                className="text-green-400 hover:text-green-300 transition-colors font-medium"
              >
                (618) 771-0402
              </a>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600/20 border border-purple-500/30 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-purple-600/30 transition-all duration-300">
                <i className="fas fa-file-download text-2xl text-purple-400"></i>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Resume</h3>
              <button 
                onClick={handleResumeDownload}
                className="text-purple-400 hover:text-purple-300 transition-colors font-medium"
              >
                Download PDF
              </button>
            </div>
          </div>

          <div className="border-t border-slate-600/30 pt-8">
            <h4 className="text-xl font-semibold text-white mb-6">Connect With Me</h4>
            <div className="flex justify-center gap-6">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`group flex flex-col items-center p-6 glass rounded-lg transition-all duration-300 ${social.color} hover:text-white hover:-translate-y-2 hover:shadow-lg min-w-[200px] border border-slate-600/30 hover:border-blue-500/50`}
                >
                  <i className={`${social.icon} text-3xl mb-3 transition-transform duration-300 group-hover:scale-110 text-slate-300 group-hover:text-white`}></i>
                  <span className="font-semibold text-lg mb-2 text-slate-300 group-hover:text-white">{social.title}</span>
                  <span className="text-sm opacity-80 text-center text-slate-400 group-hover:text-white/90">{social.description}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="gradient-bg-accent p-8 rounded-2xl text-white shadow-2xl">
          <h3 className="text-2xl font-bold mb-4">Ready to Work Together?</h3>
          <p className="text-lg mb-6 opacity-90">
            For freelance projects, please contact me through the platform where we connected. 
            For employment opportunities, feel free to reach out directly via email.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:williamashford22604@gmail.com"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 hover:-translate-y-1 transition-all duration-300 inline-flex items-center justify-center gap-2 shadow-lg"
            >
              <i className="fas fa-envelope"></i>
              Send Email
            </a>
            <button 
              onClick={handleResumeDownload}
              className="bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/30 hover:-translate-y-1 transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              <i className="fas fa-download"></i>
              Get Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
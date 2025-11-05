import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Shareable Meals",
      subtitle: "iOS Meal Planning App",
      description: "A comprehensive meal planning application that leverages AI to generate personalized meal suggestions, Meal Scanner for macro estimation, and nutrition tracking. Successfully launched on the iOS App Store with real users and active downloads.",
      image: "/ShareableMealsIcon.jpeg",
      technologies: ["React Native", "TypeScript", "Supabase", "PostgreSQL", "AI/ML", "Vercel", "iOS"],
      features: [
        "AI-based meal generation and recommendations",
        "Meal Scanner for macro estimation from food images",
        "Comprehensive nutrition API integration",
        "Intuitive user interface and experience",
        "Real-time cloud data synchronization",
        "Professional App Store deployment"
      ],
      links: {
        live: "https://www.shareablemeals.com/",
        github: "https://github.com/washford226/Shareable-Meals",
        appStore: "https://apps.apple.com/us/app/shareable-meals/id6749651529"
      },
      status: "live",
      category: "Mobile App"
    },
    {
      id: 2,
      title: "ChoreQuest",
      subtitle: "Gamified Household Management App",
      description: "An innovative household management application that revolutionizes chore management through RPG-style gamification. Features sophisticated parent/child account systems, dynamic leveling mechanics, and immersive fantasy themes. Currently in development for App Store release.",
      image: "/ChoreQuestIcon.jpeg",
      technologies: ["React Native", "Supabase", "Gamification", "TypeScript", "iOS"],
      features: [
        "Advanced parent/child account management",
        "RPG-style leveling system with achievements",
        "Real-time task synchronization across devices",
        "Immersive fantasy-inspired UI and themes",
        "Cross-platform mobile compatibility",
        "Sophisticated reward and progression systems"
      ],
      links: {
        live: null,
        github: "https://github.com/washford226/chores-quest",
        appStore: null
      },
      status: "development",
      category: "Mobile App"
    }
  ];

  const getStatusBadge = (status) => {
    const statusConfig = {
      live: { text: "Live", classes: "bg-green-100 text-green-800" },
      development: { text: "In Development", classes: "bg-yellow-100 text-yellow-800" },
      completed: { text: "Completed", classes: "bg-blue-100 text-blue-800" }
    };
    
    const config = statusConfig[status] || statusConfig.completed;
    return <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide ${config.classes}`}>{config.text}</span>;
  };

  const getCategoryIcon = (category) => {
    const icons = {
      "Mobile App": "fas fa-mobile-alt",
      "Web App": "fas fa-globe",
      "Desktop App": "fas fa-desktop"
    };
    return icons[category] || "fas fa-code";
  };

  return (
    <section id="projects" className="py-24 gradient-bg-primary">
      <div className="max-w-6xl mx-auto px-8">
        <div className="gradient-bg-accent p-12 rounded-2xl text-white text-center mb-16 shadow-2xl">
          <h3 className="text-2xl lg:text-3xl font-bold mb-8">What I Bring to Your Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: 'fas fa-rocket',
                title: 'Production Experience',
                description: 'Successfully deployed and maintain live applications with real users on the App Store'
              },
              {
                icon: 'fas fa-layer-group',
                title: 'Full-Stack Skills',
                description: 'End-to-end development from database design to user interface and deployment'
              },
              {
                icon: 'fas fa-mobile-alt',
                title: 'Mobile Expertise',
                description: 'Cross-platform mobile development with React Native and native iOS features'
              },
              {
                icon: 'fas fa-brain',
                title: 'Modern Technologies',
                description: 'Experience with AI integration, cloud services, and contemporary development practices'
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <i className={`${item.icon} text-4xl mb-4 text-white/90`}></i>
                <h4 className="text-lg font-semibold mb-3">{item.title}</h4>
                <p className="text-white/90 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Professional Projects</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Commercial-grade mobile applications built for real-world deployment and App Store distribution
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {projects.map((project) => (
            <div key={project.id} className="glass rounded-2xl overflow-hidden border border-slate-600/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-blue-500/50">
              <div className="relative h-48 gradient-bg-accent overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
                <div className="absolute top-4 right-4 glass px-3 py-2 rounded-full flex items-center gap-2 text-sm font-medium text-white border border-slate-600/30">
                  <i className={`${getCategoryIcon(project.category)} text-blue-400`}></i>
                  <span>{project.category}</span>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl lg:text-2xl font-bold text-white mb-1">{project.title}</h3>
                    <h4 className="text-base font-medium text-slate-300">{project.subtitle}</h4>
                  </div>
                  {getStatusBadge(project.status)}
                </div>
                
                <p className="text-slate-300 leading-relaxed mb-6">{project.description}</p>
                
                <div className="mb-6">
                  <h5 className="text-sm font-semibold text-white mb-3 uppercase tracking-wide">Key Features:</h5>
                  <ul className="space-y-2">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-green-400 mr-3 mt-0.5">✓</span>
                        <span className="text-slate-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="bg-blue-600/20 text-blue-300 border border-blue-500/30 px-3 py-1 rounded-2xl text-sm font-medium hover:bg-blue-600/30 transition-all duration-300">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {project.links.live && (
                    <a 
                      href={project.links.live} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-blue-700 hover:-translate-y-1 transition-all duration-300"
                    >
                      <i className="fas fa-globe"></i>
                      Website
                    </a>
                  )}
                  {project.links.appStore && (
                    <a 
                      href={project.links.appStore} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-gray-800 hover:-translate-y-1 transition-all duration-300"
                    >
                      <i className="fab fa-apple"></i>
                      App Store
                    </a>
                  )}
                  {project.links.github && (
                    <a 
                      href={project.links.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-2 bg-gray-600 text-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-gray-700 hover:-translate-y-1 transition-all duration-300"
                    >
                      <i className="fab fa-github"></i>
                      Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center gradient-bg-accent p-12 rounded-2xl text-white shadow-2xl">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">Let's Start a Conversation</h3>
          <p className="text-lg mb-8 opacity-90">I'm currently seeking opportunities as a Software Developer and would love to hear about your projects. Whether you're looking for a full-stack developer, mobile app specialist, or someone with experience in modern web technologies, I'm here to help bring your ideas to life.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="mailto:williamashford22604@gmail.com"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 hover:-translate-y-1 transition-all duration-300 shadow-lg inline-flex items-center gap-2"
            >
              <i className="fas fa-envelope"></i>
              Email Me
            </a>
            <button 
              className="bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/30 hover:-translate-y-1 transition-all duration-300 shadow-lg inline-flex items-center gap-2"
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/William Ashford Resume.pdf';
                link.download = 'William Ashford Resume.pdf';
                link.click();
              }}
            >
              <i className="fas fa-download"></i>
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
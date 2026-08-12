import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Shareable Meals",
      subtitle: "Personal Project | Feb 2025 – Sept 2025",
      description: "A full-stack meal planning application that allows users to create, edit, organize, and share meals while tracking nutritional information. This project demonstrates my software development, API work, and QA/testing responsibilities throughout the lifecycle.",
      image: "/ShareableMealsIcon.jpeg",
      technologies: ["React Native", "TypeScript", "Node.js", "Express", "Supabase", "PostgreSQL", "Vercel", "GitHub", "Jest", "Postman"],
      features: [
        "Designed and developed a full-stack meal planning application",
        "Built RESTful APIs and integrated Supabase for authentication and cloud synchronization",
        "Designed and executed manual test cases and performed API testing with Postman",
        "Resolved frontend and backend defects throughout development",
        "Developed automated unit tests with Jest to improve reliability"
      ],
      links: {
        live: null,
        github: "https://github.com/washford226/Shareable-Meals",
        appStore: null
      },
      status: "completed",
      category: "Personal Project"
    },
    {
      id: 2,
      title: "Chore Quest",
      subtitle: "Personal Project | Sept 2025 – Dec 2025",
      description: "A gamified household chore application with parent and child accounts, chore assignments, XP progression, rewards, and achievements. The project shows my work in mobile app design, backend integration, and QA validation of real-time features.",
      image: "/ChoreQuestIcon.jpeg",
      technologies: ["React Native", "TypeScript", "TailwindCSS", "Supabase", "GitHub", "Jest", "Postman"],
      features: [
        "Designed and developed a gamified household chore application",
        "Built backend functionality using Supabase for authentication and real-time synchronization",
        "Executed manual test cases and validated backend APIs with Postman",
        "Identified and resolved issues involving real-time synchronization and application functionality",
        "Developed automated unit tests with Jest to verify core application logic"
      ],
      links: {
        live: null,
        github: "https://github.com/washford226/chores-quest",
        appStore: null
      },
      status: "completed",
      category: "Personal Project"
    },
    {
      id: 3,
      title: "Unity Tower Defense",
      subtitle: "Personal Learning Project",
      description: "Built a basic 2D tower defense prototype using Unity and C#. This project helped develop gameplay logic, C# scripting, debugging skills, and understanding of Unity's component-based architecture.",
      technologies: ["Unity", "C#", "Game Logic", "Debugging", "Gameplay Systems"],
      features: [
        "Built a basic 2D tower defense prototype",
        "Implemented gameplay logic and learned C# scripting",
        "Developed debugging skills and problem-solving in gameplay systems",
        "Learned Unity's component-based architecture and design patterns"
      ],
      links: {
        live: null,
        github: "https://github.com/washford226/MonsterTowerDefense",
        appStore: null
      },
      status: "prototype",
      category: "Personal Project"
    }
  ];

  const getStatusBadge = (status) => {
    const statusConfig = {
      live: { text: "Live", classes: "bg-green-100 text-green-800" },
      development: { text: "In Development", classes: "bg-yellow-100 text-yellow-800" },
      completed: { text: "Completed", classes: "bg-blue-100 text-blue-800" },
      paused: { text: "Paused", classes: "bg-slate-100 text-slate-800" },
      prototype: { text: "Prototype", classes: "bg-violet-100 text-violet-800" }
    };
    
    const config = statusConfig[status] || statusConfig.completed;
    return <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide ${config.classes}`}>{config.text}</span>;
  };

  const getCategoryIcon = (category) => {
    const icons = {
      "Mobile App": "fas fa-mobile-alt",
      "Web App": "fas fa-globe",
      "Desktop App": "fas fa-desktop",
      "Game Project": "fas fa-gamepad",
      "Personal Project": "fas fa-user-secret"
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
                icon: 'fas fa-vial',
                title: 'Development + QA',
                description: 'Approach features with both a developer mindset and a tester\'s eye for edge cases, usability, and reliability.'
              },
              {
                icon: 'fas fa-robot',
                title: 'Test Automation',
                description: 'Experience writing automated tests with Jest and using tooling to prevent regressions and improve confidence.'
              },
              {
                icon: 'fas fa-layer-group',
                title: 'Full-Stack Understanding',
                description: 'Understand how APIs, databases, and UIs fit together to build and validate better software.'
              },
              {
                icon: 'fas fa-sync-alt',
                title: 'Collaboration & Feedback',
                description: 'Work closely with teammates to diagnose bugs, improve workflows, and raise product quality.'
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
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Projects</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Full-stack applications and personal projects built to strengthen both my development skills and my QA/test automation foundation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {projects.map((project) => (
            <div key={project.id} className="glass rounded-2xl overflow-hidden border border-slate-600/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-blue-500/50">
              {project.image && (
                <div className="relative h-48 gradient-bg-accent overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
                  <div className="absolute top-4 right-4 glass px-3 py-2 rounded-full flex items-center gap-2 text-sm font-medium text-white border border-slate-600/30">
                    <i className={`${getCategoryIcon(project.category)} text-blue-400`}></i>
                    <span>{project.category}</span>
                  </div>
                </div>
              )}
              
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
          <p className="text-lg mb-8 opacity-90">I'm currently seeking opportunities in software development, QA, and test automation roles where I can contribute to building reliable software and improving product quality.</p>
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
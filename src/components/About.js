import React from 'react';

const About = () => {
  const skills = [
    { category: 'Frontend & Mobile', items: ['React', 'React Native', 'TypeScript', 'JavaScript'] },
    { category: 'Backend & APIs', items: ['Node.js', 'Express', 'REST APIs'] },
    { category: 'Databases & Cloud', items: ['Supabase', 'PostgreSQL', 'MySQL', 'SQLite'] },
    { category: 'Cloud & Deployment', items: ['Vercel', 'Supabase Edge Functions'] },
    { category: 'Programming Languages', items: ['Java', 'Python', 'C#'] },
    { category: 'Testing & Tools', items: ['Jest', 'Git/GitHub', 'Maven', 'Agile/Scrum'] }
  ];

  return (
    <section id="about" className="py-24 gradient-bg-secondary">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">About Me</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Driven Full-Stack Developer with a passion for creating scalable solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h3 className="text-2xl lg:text-3xl font-semibold text-white mb-6">Professional Summary</h3>
            <p className="text-lg leading-relaxed text-slate-300 mb-6">
              I'm a driven Full-Stack Developer with a strong foundation in computer science and 
              hands-on experience developing full-stack and mobile applications. I specialize in 
              React, Node.js, TypeScript, and modern database solutions including Supabase and PostgreSQL, 
              with proven success building and deploying production-ready software.
            </p>
            <p className="text-lg leading-relaxed text-slate-300 mb-8">
              My expertise includes API integration, cloud deployment, testing methodologies, and Agile 
              development practices. I'm passionate about creating scalable, maintainable, and user-centered 
              applications with clean architecture. Currently seeking opportunities as a Software Developer 
              while also available for freelance projects.
            </p>

            <div className="mb-8">
              <h4 className="text-xl font-semibold text-white mb-4">Education</h4>
              <div className="space-y-6">
                <div className="glass p-6 rounded-lg border border-slate-600/30 hover-lift">
                  <h5 className="text-lg font-semibold text-blue-400 mb-2">Bachelor of Science in Computer Science</h5>
                  <p className="text-slate-300 mb-2">Murray State University – Murray, KY | May 2025 | GPA: 3.37</p>
                  <p className="text-slate-400">
                    <strong>Relevant Coursework:</strong> Web Application Development, Data Structures, 
                    Software Construction, Computer Security, Algorithms, Machine Learning, 
                    Parallel/Distributed Computing
                  </p>
                </div>
                <div className="glass p-6 rounded-lg border border-slate-600/30 hover-lift">
                  <h5 className="text-lg font-semibold text-blue-400 mb-2">Associate of Science</h5>
                  <p className="text-slate-300 mb-2">Shawnee Community College – Ullin, IL | May 2023</p>
                  <p className="text-slate-400">
                    <strong>Achievement:</strong> Phi Theta Kappa Honor Society Member
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl lg:text-3xl font-semibold text-white mb-6">Technical Skills</h3>
            <div className="space-y-6 mb-8">
              {skills.map((skillGroup, index) => (
                <div key={index} className="glass p-6 rounded-lg border border-slate-600/30 hover-lift">
                  <h4 className="text-lg font-semibold text-white mb-4">{skillGroup.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <span key={skillIndex} className="bg-blue-600/20 text-blue-300 border border-blue-500/30 px-3 py-2 rounded-full text-sm font-medium hover:bg-blue-600/30 transition-all duration-300">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="glass p-6 rounded-lg border border-slate-600/30 hover-lift">
              <h4 className="text-lg font-semibold text-white mb-4">Core Knowledge</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  'Object-Oriented Programming (OOP)',
                  'Data Structures & Algorithms',
                  'Software Construction',
                  'Database Design',
                  'API Development',
                  'Mobile App Architecture'
                ].map((knowledge, index) => (
                  <span key={index} className="bg-purple-600/20 text-purple-300 border border-purple-500/30 px-3 py-2 rounded-full text-sm font-medium hover:bg-purple-600/30 transition-all duration-300">
                    {knowledge}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
import React from 'react';

const About = () => {
  const skills = [
    { category: 'Testing & QA', items: ['Regression Testing', 'API Testing', 'Functional Testing', 'Manual Testing', 'Test Case Design & Execution', 'Bug Tracking & Reporting', 'Postman', 'Jest'] },
    { category: 'Frontend & Mobile', items: ['React', 'React Native', 'Vue.js', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'TailwindCSS'] },
    { category: 'Backend & Databases', items: ['Node.js', 'Express', 'REST APIs', 'PostgreSQL', 'MySQL', 'SQLite', 'SQL Server', 'SQL', 'Supabase'] },
    { category: 'Development Tools & Workflow', items: ['Git/GitHub', 'Apache Maven', 'CI/CD', 'Agile/Scrum', 'Vercel'] },
    { category: 'Programming Languages', items: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C#'] },
    { category: 'Core Knowledge', items: ['SDLC', 'OOP', 'Data Structures & Algorithms', 'Debugging & Root Cause Analysis', 'Software Development Life Cycle'] }
  ];

  return (
    <section id="about" className="py-24 gradient-bg-secondary">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">About Me</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Detail-oriented software engineer with full-stack development experience and a strong QA/testing foundation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h3 className="text-2xl lg:text-3xl font-semibold text-white mb-6">Professional Summary</h3>
            <p className="text-lg leading-relaxed text-slate-300 mb-6">
              Detail-oriented Software Engineer with experience developing full-stack applications
              and ensuring software quality through manual testing, API testing, and automated testing.
              Skilled in React Native, TypeScript, Node.js, PostgreSQL, Git, Postman, and Jest,
              with strong analytical and problem-solving skills for building scalable, reliable applications.
            </p>
            <p className="text-lg leading-relaxed text-slate-300 mb-8">
              My work combines front-end and back-end development with quality validation, helping me
              catch defects early, improve reliability, and support better product outcomes. I enjoy
              solving real-world software problems while continuing to strengthen both my development
              and QA/testing skills in collaborative, fast-paced environments.
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
                  'Mobile App Architecture',
                  'Software Testing & QA Principles'
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
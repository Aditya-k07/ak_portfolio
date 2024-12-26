import React from 'react';
// import './Projects.css';

function Projects() {
  const projects = [
    { name: 'AI Chatbot', description: 'A chatbot using NLP and transformer models.' },
    { name: 'Image Classifier', description: 'A CNN-based image classification system.' },
    { name: 'Recommendation System', description: 'Collaborative filtering-based movie recommendation.' },
  ];

  return (
    <section id="projects" className="projects">
      <h1>Projects</h1>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h2>{project.name}</h2>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;

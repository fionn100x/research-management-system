import React from 'react';
import './Research.css';

function Research() {
  return (
    <div className="research-page">
      <section className="intro-section">
        <h1>Welcome to Our Research</h1>
        <p>
          Our research focuses on cutting-edge technologies and scientific advancements
          aimed at solving real-world challenges. We are committed to pushing the boundaries
          of knowledge and innovation to improve lives and societies.
        </p>
      </section>

      <section className="research-areas">
        <h2>Research Areas</h2>
        <div className="areas-list">
          <div className="area-item">
            <h3>Artificial Intelligence</h3>
            <p>
              Exploring the potential of AI to revolutionize industries and improve daily life.
            </p>
          </div>
          <div className="area-item">
            <h3>Quantum Computing</h3>
            <p>
              Investigating the next frontier of computing, which has the potential to solve problems
              currently beyond the reach of classical computers.
            </p>
          </div>
          <div className="area-item">
            <h3>Sustainable Energy</h3>
            <p>
              Researching clean and renewable energy sources to tackle climate change and promote sustainability.
            </p>
          </div>
        </div>
      </section>

      <section className="ongoing-projects">
        <h2>Ongoing Projects</h2>
        <div className="projects-list">
          <div className="project-item">
            <h3>AI for Healthcare</h3>
            <p>
              Using AI to enhance diagnostic accuracy and improve patient outcomes in the healthcare industry.
            </p>
          </div>
          <div className="project-item">
            <h3>Quantum Algorithms</h3>
            <p>
              Developing new quantum algorithms that could dramatically improve computational efficiency.
            </p>
          </div>
          <div className="project-item">
            <h3>Solar Power Innovations</h3>
            <p>
              Exploring novel approaches to improve solar panel efficiency and storage capacity.
            </p>
          </div>
        </div>
      </section>

      <section className="publications">
        <h2>Publications</h2>
        <ul>
          <li>
            <a href="#">"Exploring AI in the Medical Field" – Journal of Medical AI, 2023</a>
          </li>
          <li>
            <a href="#">"Advancements in Quantum Computing Algorithms" – International Journal of Quantum Computing, 2022</a>
          </li>
          <li>
            <a href="#">"Sustainable Energy Solutions for the Future" – Energy Sustainability Review, 2023</a>
          </li>
        </ul>
      </section>

      <section className="cta-section">
        <h2>Get Involved</h2>
        <p>
          Interested in our research? You can contribute or collaborate with us by reaching out through our contact page.
        </p>
        <a href="/contact" className="cta-button">Contact Us</a>
      </section>
    </div>
  );
}

export default Research;

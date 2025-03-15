import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-header">
        <h1>About Us</h1>
        <p>Learn more about our mission, vision, and values.</p>
      </div>
      
      <div className="about-content">
        <section className="about-section">
          <h2>Our Mission</h2>
          <p>
            At Research Whizz our mission is to empower individuals and organizations
            through innovative solutions that simplify processes and improve productivity.
            We believe in creating products that make people's lives easier, help them make
            better decisions, and connect them with the world in new and meaningful ways.
          </p>
        </section>

        <section className="about-section">
          <h2>Our Vision</h2>
          <p>
            Our vision is to become a leader in the tech industry, known for our ability
            to create cutting-edge solutions that drive success for our customers. We aim
            to provide products that are not only functional but also beautiful and intuitive.
            By pushing the boundaries of technology, we strive to shape the future of the digital world.
          </p>
        </section>

        <section className="about-section">
          <h2>Our Values</h2>
          <p>
            We believe in:
          </p>
          <ul>
            <li><strong>Innovation:</strong> Continuously challenging ourselves to come up with new ideas and solutions.</li>
            <li><strong>Integrity:</strong> Doing the right thing, even when no one is watching.</li>
            <li><strong>Customer-Centricity:</strong> Putting the needs of our customers first and delivering exceptional value.</li>
            <li><strong>Sustainability:</strong> Being mindful of our impact on the planet and striving to make responsible decisions.</li>
            <li><strong>Collaboration:</strong> Working together as a team, respecting diverse perspectives, and achieving our goals through teamwork.</li>
          </ul>
        </section>

        <section className="about-section">
          <h2>Our History</h2>
          <p>
            Founded in 1932, Research Whizz began as a small startup with a simple idea:
            to create solutions that make everyday tasks easier and more efficient. What started as
            a passion project has now evolved into a global company with a presence in over 20 countries.
            Our commitment to excellence and innovation has driven our growth, and we continue to be
            passionate about making a difference in the world through our products.
          </p>
        </section>

        <section className="about-section">
          <h2>Meet Our Team</h2>
          <p>
            Our team is made up of passionate individuals who are committed to pushing the
            boundaries of what’s possible. From software engineers and designers to marketing
            experts and customer support professionals, every member of our team plays a crucial
            role in helping us achieve our mission. We are proud of the diverse group of people who
            come together to make Research Whizz a success.
          </p>
        </section>
      </div>

      <div className="about-footer">
        <p>Want to learn more? Get in touch with us for more details.</p>
        <p><a href="/contact">Contact Us</a></p>
      </div>
    </div>
  );
};

export default About;






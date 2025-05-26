// src/components/ProjectBriefSection.js
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Project.css';

const Project = ({ left, right, delay = 0 }) => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section className="my-5 text-white project-brief">
      <div className="custom-container">
        <div className="row">
          {/* Left Column */}
          <div className="col-md-6 mb-4 project-1" data-aos="fade-up">
            {left}
          </div>

          {/* Right Column */}
          <div className="col-md-6 project-2" data-aos="fade-up" data-aos-delay={delay}>
            {right}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;

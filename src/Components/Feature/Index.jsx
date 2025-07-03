import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Index.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import CompassImg from '../../Assets/Images/compass.png';
import SignpostImg from '../../Assets/Images/signpost.png';
import GroupImg from '../../Assets/Images/group.png';
import SafetyImg from '../../Assets/Images/safety.png';

const features = [
  {
    title: 'Flexibility in Planning',
    imgSrc: CompassImg,
    descriptions: [
      'Give choice in treks, groups, trek leaders etc. with adequate filters',
      'Let independent institutions like youth hostels organize treks.'
    ]
  },
  {
    title: 'Finding the Right Trek',
    imgSrc: SignpostImg,
    descriptions: [
      'Mark difficulty level and provide detailed information about the trek',
      'Review system to let people share and read about others experiences'
    ]
  },
  {
    title: 'Finding the Right Group',
    imgSrc: GroupImg,
    descriptions: [
      'Options to join organized groups or to create new, optimized groups',
      'Group chat feature to familiarize trek members with the team'
    ]
  },
  {
    title: 'Safety Concerns',
    imgSrc: SafetyImg,
    descriptions: [
      'Verification process for trekkers, leaders, organizations and shops',
      'Dedicated pages to see work and experiences of leaders, organizers & shops'
    ]
  }
];

const JourneyFeatures = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="journey-features">
      <div className="custom-container">
        <p className='concept-line font-24'>Features</p>
        <div className="row">
          {features.map((f, i) => (
            <div
              className="col-md-3 mb-4"
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <div className="feature-item text-center">
                <p className="mb-4 pb-4 mt-4 pt-4 font-24">{f.title}</p>
                <img
                  src={f.imgSrc}
                  alt={f.title}
                  className="w-100 mb-3"
                />
                <div className="connector mb-3"></div>
                {f.descriptions.map((desc, idx) => (
                  <div className="text-white font-20 feature-content" key={idx}>
                    {desc}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JourneyFeatures;

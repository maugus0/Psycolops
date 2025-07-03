import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Concept.css';

const Concept = ({
  title = "Concept",
  image,
  imageAlt = "Concept visual",
  paragraphs = [],
  heading = [],
  imageAnimation = "fade-right",
  textAnimation = "fade-left",
  imageDelay = 0,
  textDelay = 200,
  aosDuration = 1000,
}) => {
  useEffect(() => {
    AOS.init({ duration: aosDuration });
  }, [aosDuration]);

  // Check if image prop is a video file
  const isVideo = image?.match(/\.(mp4|webm|ogg)$/i);

  return (
    <section className="Concept">
      <div className="custom-container">
        <p className="font-24 concept-line" data-aos="fade-up">{title}</p>

        <div className="row padding-top-60">
          <div className="col-md-6 concept-1" data-aos={imageAnimation} data-aos-delay={imageDelay}>
            {isVideo ? (
              <video
                src={image}
                autoPlay
                loop
                muted
                playsInline
                style={{ width: '100%', height: 'auto' }}
                className="d-flex video-trekkit"
              />
            ) : (
              <img
                src={image}
                alt={imageAlt}
                style={{ width: '100%', height: 'auto' }}
                className="d-flex"
              />
            )}
          </div>

          <div className="col-md-6 concept-2 concept-2-p" data-aos={textAnimation} data-aos-delay={textDelay}>
            {paragraphs.map((para, index) => (
              <p key={index} dangerouslySetInnerHTML={{ __html: para }}></p>
            ))}

            {heading.length > 0 && (
              <div className="concept-headings mt-4">
                {heading.map((head, idx) => (
                  <h4 key={idx} className="mb-2 color-purple font-48">{head}</h4>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Concept;

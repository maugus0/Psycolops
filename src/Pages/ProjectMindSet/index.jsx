import React from 'react';
import Header from '../../Components/Header/Header';
import Banner from '../../Components/Banner/Banner';
import ProjectBrief from '../../Components/ProjectBrief/Project';
import Image from '../../Components/Image/Image';
import Concept from '../../Components/Concept/Concept';
import Collage from '../../Components/Collage/Collage';
import ProjectSlider from '../../Components/ProjectSlider/Projectslider';
import Footer from '../../Components/Footer/Footer';
import mindshareImage from "../../Assets/Images/mindshare-banner.png";
import InfiniteImage from '../../Assets/Images/infinite-img.png';
import ConceptImage from '../../Assets/Images/concept-img.png';
import './Index.css'

const ProjectMindSet = () => {
  const leftContent = (
    <>
      <div className="mb-4">
        <h5>Nature</h5>
        <p>Pitched to Client</p>
        <p><em>(Internship @Clay Design Strategy)</em></p>
      </div>
      <div>
        <h5>Roles:</h5>
        <p>Research</p>
        <p>Logo Design</p>
        <p>Visual Design</p>
      </div>
    </>
  );

  const rightContent = (
    <>
      <h4>Brief:</h4>
      <p>
        The client approached us to build an identity for a platform centered on collaboration,
        long-term impact, and shared growth. The aim was to communicate how meaningful partnerships
        can create lasting change—starting from a single idea and expanding outward.
      </p>
      <p>
        They wanted a system that felt open, inclusive, and dynamic—something that could visually represent
        the belief that impact grows when people come together with a shared purpose. The concept needed to speak
        to continuous evolution, mutual growth, and the strength found in unity.
      </p>
    </>
  );
const conceptParagraphs = [
  `The concept draws inspiration from <strong>ripples</strong> — a simple yet powerful symbol of how one idea or action can create<strong> lasting impact</strong>. Like a drop in water, it starts small but expands outward, touching more lives as it moves.`,
  `When two ripples meet, they create a moment of <strong>collaboration and synergy</strong> — a reflection of how partnerships can strengthen purpose and amplify outcomes. It’s not just about coming together, but about growing together.`,
  `At the point where the ripples intersect, they form an <strong>infinity symbol</strong> — representing the <strong>endless possibilities</strong> that emerge when people unite around a shared goal. It becomes a visual expression of continuous growth, shared impact, and the long-term change that true collaboration can bring.`,
  `This concept isn’t just about design — it’s about<strong> capturing the spirit of working together to create something that lasts.</strong>`
];
  return (
    <>
      <Header />
     <Banner
  subtitle={
    <>
      <span style={{ color: '#BEB8EB'  }}>MINDSHARE</span> | LOGO AND BRANDING
    </>
  }
  title={` Designing an Identity that Reflects
            Collaboration, Connection, and Possibility.`}
  imageSrc={mindshareImage}
  imageAlt="Mindshare visual"
  textAnimation="fade-up"
  imageAnimation="fade-up"
/>
      <ProjectBrief left={leftContent} right={rightContent} delay={200} />
      <Image
        src={InfiniteImage}
        alt="Infinite visual"
        animation="fade-up"
        className="custom-style"
        duration={1500}
      />
      <Concept
        title="Concept"
        image={ConceptImage}
        imageAlt="Ripples creating infinity"
        paragraphs={conceptParagraphs}
        imageAnimation="fade-up"
        textAnimation="fade-up"
        imageDelay={0}
        textDelay={200}
        aosDuration={1200}
      />
      <Collage />
      <ProjectSlider />
      <Footer />
    </>
  );
};

export default ProjectMindSet;

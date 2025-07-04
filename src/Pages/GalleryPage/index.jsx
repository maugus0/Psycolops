import React, { useState, useEffect } from 'react';
import './index.css';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

// Image imports
import Collage1 from '../../Assets/Images/gallery-images/gallery-1.png';
import Collage6 from '../../Assets/Images/gallery-images/gallery-6.png';
import Collage8 from '../../Assets/Images/gallery-images/gallery-8.png';

// Video imports
import Video3 from '../../Assets/Video/video-3.mp4';
import Video4 from '../../Assets/Video/video-4.mp4';
import Video5 from '../../Assets/Video/video-5.mp4';
import Video6 from '../../Assets/Video/video-6.mp4';
import Video7 from '../../Assets/Video/video-7.mp4';
import Video8 from '../../Assets/Video/video-8.mp4';
import Video9 from '../../Assets/Video/video-9.mp4';
import Video10 from '../../Assets/Video/video-10.mp4';
import Video11 from '../../Assets/Video/video-11.mkv';
import Video12 from '../../Assets/Video/video-12.mp4';
import Video13 from '../../Assets/Video/video-13.mp4';
import Video14 from '../../Assets/Video/video-14.mkv';
import Video15 from '../../Assets/Video/video-15.mp4';
import Video16 from '../../Assets/Video/video-16.mp4';
import Video17 from '../../Assets/Video/video-17.mp4';
import Video18 from '../../Assets/Video/video-18.mp4';
import Puppet from '../../Assets/Video/puppet.gif'
import AtithiVideo from '../../Assets/Video/atithi-video.mp4';
import TitleVideo from '../../Assets/Video/title-folio-video.mp4';

const categories = ['All', 'Branding', 'Motion', 'Sketchbooks', 'Typography'];

const allItems = [
  { id: 1, category: 'Branding', img: Collage1 },
  { id: 6, category: 'Branding', img: Collage6 },
  { id: 8, category: 'Branding', img: Collage8 },
  { id: 15, category: 'Motion', video: Video3 },
  { id: 16, category: 'Motion', video: Video4 },
  { id: 17, category: 'Motion', video: Video5 },
  { id: 18, category: 'Motion', video: Video6 },
  { id: 19, category: 'Motion', video: Video7 },
  { id: 20, category: 'Motion', video: Video8 },
  { id: 21, category: 'Typography', video: Video9 },
  { id: 22, category: 'Motion', video: Video10 },
  { id: 23, category: 'Motion', video: Video11 },
  { id: 24, category: 'Motion', video: Video12 },
  { id: 25, category: 'Motion', video: Video13 },
  { id: 26, category: 'Motion', video: Video14 },
  { id: 27, category: 'Motion', video: Video15 },
  { id: 28, category: 'Motion', video: Video16 },
  { id: 29, category: 'Typography', video: Video17 },
  { id: 30, category: 'Typography', video: Video18 },
   { id: 31, category: 'Typography', video: AtithiVideo},
    { id: 32, category: 'Typography', video: TitleVideo},
      { id: 33, category: 'Typography', img: Puppet },
];

const WorkGallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const visibleCount = 3;
  const visibleCategories = isMobile ? categories.slice(0, visibleCount) : categories;
  const hiddenCategories = isMobile ? categories.slice(visibleCount) : [];

  const filteredItems =
    activeCategory === 'All'
      ? allItems
      : allItems.filter(item => item.category === activeCategory);

  const openModal = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  return (
    <>
      <Header />
      <section className="work-gallery">
        <h1 className="gallery-heading">
          Here's a compilation of my work including<br /> personal as well as client projects.
        </h1>

        <div className="filter-nav">
          {visibleCategories.map(cat => (
            <button
              key={cat}
              className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}

          {isMobile && !showMore && hiddenCategories.length > 0 && (
            <button className="filter-btn toggle-btn" onClick={() => setShowMore(true)}>+</button>
          )}

          {isMobile && showMore && hiddenCategories.map(cat => (
            <button
              key={cat}
              className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}

          {isMobile && showMore && (
            <button className="filter-btn toggle-btn" onClick={() => setShowMore(false)}>−</button>
          )}
        </div>

        <div className="gallery-grid">
          {filteredItems.map(item => (
            <div
              key={item.id}
              className="gallery-item"
              onClick={() => openModal(item)}
              style={{ cursor: 'pointer' }}
            >
              {item.img ? (
                <img src={item.img} alt={item.category} />
              ) : item.video ? (
                <video
                  src={item.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  width="100%"
                  style={{ borderRadius: '8px' }}
                />
              ) : null}
            </div>
          ))}
        </div>

        {isModalOpen && selectedItem && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={closeModal}>×</button>
              {selectedItem.img ? (
                <img src={selectedItem.img} alt="Preview" style={{ maxWidth: '100%', borderRadius: '8px' }} />
              ) : selectedItem.video ? (
                <video
                  src={selectedItem.video}
                  controls
                  autoPlay
                  style={{ maxWidth: '100%', borderRadius: '8px' }}
                />
              ) : null}
            </div>
          </div>
        )}
      </section>
      <Footer />
    </>
  );
};

export default WorkGallery;

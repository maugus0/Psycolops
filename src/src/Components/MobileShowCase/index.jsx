import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import OverviewImg from '../../Assets/Images/mobile-overview.png';
import GalleryImg  from '../../Assets/Images/mobile-gallery.png';
import FAQImg      from '../../Assets/Images/mobile-faq.png';
import ReviewsImg  from '../../Assets/Images/mobile-reviews.png';

const items = [
  { label: 'Overview', imgSrc: OverviewImg },
  { label: 'Gallery',  imgSrc: GalleryImg  },
  { label: 'FAQ',      imgSrc: FAQImg      },
  { label: 'Reviews',  imgSrc: ReviewsImg  },
];

const MobileShowcase = () => (
  <section className="mobile-showcase py-5">
    <div className="custom-container text-center ">
      <h2 className="mb-4">
        Everything you need for your next big trek on one platform.
      </h2>

      <div className="row justify-content-center mobile-padding pt-4 mobile-block">
        {items.map((item, idx) => (
          <div className="col-6 col-sm-3 mb-4 " key={idx}>
            <div className="phone-frame mx-auto mb-2">
              <img src={item.imgSrc} alt={item.label} className="img-fluid" />
            </div>
            <div className="label font-24">{item.label}</div>
          </div>
        ))}
      </div>

      <p className="description mx-auto mt-4 font-24">
        Explore treks your way. Find all the information you need, create or join camps,
        and customize your trekking experience—<strong>your adventure, your rules.</strong>
      </p>
    </div>
  </section>
);

export default MobileShowcase;

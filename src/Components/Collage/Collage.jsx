import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Collage1 from '../../Assets/Images/mix-image.png';
import Collage2 from '../../Assets/Images/collage-2.png';
import Collage3 from '../../Assets/Images/collage-3.png';
import Collage4 from '../../Assets/Images/collage-4.png';
import Collage5 from '../../Assets/Images/Collage5.png';
import Collage6 from '../../Assets/Images/Collage6.png';
import Collage7 from '../../Assets/Images/Collage7.png';
import Collage8 from '../../Assets/Images/Collage8.png';
import './Collage.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Collage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className='Collage'>
      <div className="custom-container">
      <div data-aos="fade-up">
        <img src={Collage1} alt="" width="100%" />
      </div>

      <div className="row mt-4" data-aos="fade-up">
        <div className="col-md-8">
          <img src={Collage2} alt="" width="100%" height="100%" className='collage-2'/>
        </div>
        <div className="col-md-4">
          <img src={Collage3} alt="" width="100%" className='id-image' />
        </div>
      </div>

      <div className='mt-4' data-aos="fade-up">
        <img src={Collage4} alt="" width="100%" />
      </div>

      <div className="row mt-4 gap-20" data-aos="fade-up">
        <div className="col-md-4">
          <div className="Collage5" data-aos="fade-up" data-aos-delay="100">
            <img src={Collage5} alt="" />
          </div>
        </div>
        <div className="col-md-4">
          <div className="Collage6" data-aos="fade-up" data-aos-delay="200">
            <img src={Collage6} alt="" />
          </div>
        </div>
        <div className="col-md-4">
          <div className="Collage7" data-aos="fade-up" data-aos-delay="300">
            <img src={Collage7} alt="" />
          </div>
        </div>
      </div>

      <div className='mt-4' data-aos="fade-up">
        <img src={Collage8} alt="" width="100%" />
      </div>
    </div>
    </div>
  );
};

export default Collage;

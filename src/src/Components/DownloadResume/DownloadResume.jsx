import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './DownloadResume.css';
import YashImage from '../../Assets/Images/yash-img.jpeg'
import YashResume from '../../Assets/pdf/yash-cv.pdf';

const ResumeSection = () => {
  return (
    <div className="hand-container">
      <div className="custom-container">
        <div className="row">
          <div className="col-md-6">
            <img src={YashImage} alt="" className="grey-img img-width" />
          </div>
          <div className="col-md-6 color-white d-flex flex-column justify-content-end">
            <h4 className="font-52 margin-bottom-10rem">Hello!</h4>
            <h5 className="font-52">I am Yash. I am a visual<br /> designer based in New Delhi.</h5>
            <a href={YashResume} download>
              <button className="download-button">Download Resume</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeSection;

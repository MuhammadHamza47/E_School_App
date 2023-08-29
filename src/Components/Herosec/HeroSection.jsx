import React from 'react';
import img1 from '../../Assets/image 1.png'
import img2 from '../../Assets/image 2.png'
import img3 from '../../Assets/image 3.png'
import img4 from '../../Assets/image 4.png'

function HeroSection() {
  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col-12 col-sm-10 col-md-6 col-lg-3 my-3">
          <div className="card text-center pb-4" id="st-card">
            <img src={img1} className="img-fluid" width="66px" height="85px" alt="" />
            <div className="card-body">
              <h5 className="card-title">1500+ Topics</h5>
              <p className="card-text">Learn Anything</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-10 col-md-6 col-lg-3 my-3">
          <div className="card text-center pb-4 shadow-sm p-3 mb-5 bg-white rounded" id="st-card-shadow">
            <img src={img4} className="img-fluid" width="66px" height="85px" alt="" />
            <div className="card-body">
              <h5 className="card-title">1800+ Students</h5>
              <p className="card-text">Learn Anything</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-10 col-md-6 col-lg-3 my-3">
          <div className="card text-center pb-4" id="st-card">
            <img src={img2} className="img-fluid" width="66px" height="85px" alt="" />
            <div className="card-body">
              <h5 className="card-title">9K+ Test Tokens</h5>
              <p className="card-text">Learn Anything</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-10 col-md-6 col-lg-3 my-3">
          <div className="card text-center pb-4" id="st-card">
            <img src={img3} className="img-fluid" width="66px" height="85px" alt="" />
            <div className="card-body">
              <h5 className="card-title">2000+ Students</h5>
              <p className="card-text">Learn Anything</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;

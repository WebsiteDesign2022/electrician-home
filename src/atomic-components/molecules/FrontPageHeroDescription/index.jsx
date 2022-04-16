import React from "react";
import TopLeftTriangle from '../../atoms/TopLeftTriangle';

import './index.scss';

const FrontPageHeroDescription = () => (
  <div className="col-lg-6 justify-content-left">
    <TopLeftTriangle color="orange"/>
    <h1 className="display-5 lh-1 mb-3 text-light">Electrical Contractor</h1>
    <h1 className="display-5 fw-bold lh-1 mb-3 text-light">Licensed & Insured</h1>
    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
      <button type="button" className="btn btn-primary btn-lg px-10 me-md-2 rounded-0" id="box-shadow-button-top-left">ABOUT US</button>
      <button type="button" className="btn btn-light text-primary btn-lg px-4 rounded-0 box-shadow-bottom-right">CONTACT US</button>
    </div>
  </div>
);

export default FrontPageHeroDescription;

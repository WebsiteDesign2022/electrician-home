import React from 'react';

import './index.scss';

const FeatureBox = ({ title, description }) => (
  <div className="col d-flex align-items-start">
      <div className="icon-square flex-shrink-0 me-3 py-1 arrow">
        {">>"}
      </div>
      <div className="align-items-start">
        <h2 align="left" className="title">{title}</h2>
        <p align="left" className="description">{description}</p>
      </div>
  </div>
);

export default FeatureBox;
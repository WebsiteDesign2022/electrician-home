import React from 'react';

import FrontPageHeroDescription from '../../molecules/FrontPageHeroDescription';

import './index.scss';

function FrontPageHero() {
  return (
    <div className="col-xxl-8 px-4 py-5 bg-dark">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <img src="bootstrap-themes.png" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
        </div>

        <FrontPageHeroDescription />

      </div>
    </div>
  );
}

export default FrontPageHero;

import React from 'react';

import './PageTemplate.css';

const PageTemplate = ({topBar, frontPageHero, featureGrid, sectionDivider, aboutUs, testimonials, contactUs, bottomBar}) => (
  <React.Fragment>
    
    {topBar}

    {frontPageHero}

    {featureGrid}

    {sectionDivider}

    {aboutUs}

    {testimonials}

    {contactUs}

    {bottomBar}

  </React.Fragment>
);

export default PageTemplate;

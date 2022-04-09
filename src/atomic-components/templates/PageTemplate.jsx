import React from 'react';
import './PageTemplate.css';

const PageTemplate = ({topBar, frontPageHero}) => {
  return (
    <React.Fragment>

      {topBar}

      {frontPageHero}

    </React.Fragment>
  );
}

export default PageTemplate;

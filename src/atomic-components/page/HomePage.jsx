import React from 'react';

import TopBar from '../organisms/TopBar';
import PageTemplate from '../templates/PageTemplate';
import FrontPageHero from '../organisms/FrontPageHero';

import './HomePage.css';


function HomePage() {
  return (
    <div>
      <PageTemplate 
        topBar={<TopBar />}
        frontPageHero={<FrontPageHero/>}
      />
    </div>
  );
}

export default HomePage;

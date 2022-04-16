import React from 'react';

import TopBar from '../organisms/TopBar';
import PageTemplate from '../templates/PageTemplate';
import FrontPageHero from '../organisms/FrontPageHero';

import FeatureGrid  from '../organisms/FeatureGrid';
import SectionDivider from '../organisms/SectionDivider';
import AboutUs from '../organisms/AboutUs';
import Testimonials from '../organisms/Testimonials';
import ContactUs from '../organisms/ContactUs';
import BottomBar from '../organisms/BottomBar';

import './index.scss';

//
// Sample Data
// Please replace with real data.
//

const featureList = Array(9).fill({
  title: 'Cable Change',
  description: 'Vestibulum ac diam sit arret quam vehicular elementum sed sit arret dui. Lorem ipsum dolor sit amet. consectetur.'
});

const testimonials = [{
  description: 'Lorem ipsum dolor sit amet. consectetur. Lorem ipsum dolor sit amet. consectetur. Lorem ipsum dolor sit amet. consectetur.',
  name: 'John Smith'
}, {
  description: 'Lorem ipsum dolor sit amet. consectetur. Lorem ipsum dolor sit amet. consectetur. Lorem ipsum dolor sit amet. consectetur.',
  name: 'Jenny Crane'
}];

const HomePage = () => (
  <div className="">
    <PageTemplate 
      topBar={<TopBar />}
      frontPageHero={<FrontPageHero />}
      featureGrid={<FeatureGrid featureList={featureList} />}
      sectionDivider={<SectionDivider />}
      aboutUs={<AboutUs />}
      testimonials={<Testimonials testimonials={testimonials}/>}
      contactUs={<ContactUs/>}
      bottomBar={<BottomBar/>}
    />
  </div>
);

export default HomePage;

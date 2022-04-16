import React from 'react';
import SecondaryTitle from '../../molecules/SecondaryTitle';
import SecondaryDescription from '../../molecules/SecondaryDescription';
import './index.scss';

const AboutUs = () => (
  <div className="col-xxl-8 px-4 py-5 about-us">
    <div className="row flex-lg-row align-items-left g-5 py-5">
      <div className="col-lg-8">

        <SecondaryTitle titlePartOne="About Us & Why We are" titlePartTwo="The Best For the Job" />

        <SecondaryDescription 
            text="Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vivamus suscipit tortor eget felis porttitor volutpat. Donec rutrum congue leo eget malesuada. Nulla quis lorem ut libero malesuada feugiat. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. " />

      </div>
      <div className="col-lg-12">
        <div className="d-grid gap-2 d-md-flex justify-content-end">

          <button type="button" className="btn btn-dark btn-lg px-4 box-shadow-bottom rounded-0">More about Us →</button>
        
        </div>
      </div>
    </div>
  </div>
);

export default AboutUs;

import React from 'react';

import TitleWithLineMotif from '../../molecules/TitleWithLineMotif';

import Testimonial from '../../molecules/Testimonial';

import './index.scss';

const Testimonials = ({ testimonials }) => (
    <div className="testimonials">

        <TitleWithLineMotif title="Testimonials" />
        
        <div className="row row-cols-1 row-cols-md-3 gx-4 py-5 list">
            { testimonials.map(({ description, name }, index) => (
                <Testimonial description={description} name={name} key={index} />)) 
            }
        </div>
    </div>
);

export default Testimonials;

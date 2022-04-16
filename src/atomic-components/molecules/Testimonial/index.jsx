import React from 'react';

import './index.scss';

const Testimonial = ({ description, name }) => (
    <div className="col d-flex align-items-start px-6 gx-6 bg-white testimonial">
        <div className="m-12">
            <p align="left" className="testimonial-content">{description}</p>
            <h6 align="left">{name}</h6>
        </div>
    </div>
);

export default Testimonial;
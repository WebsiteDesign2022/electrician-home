import React from 'react';
import FeatureBox from '../../molecules/FeatureBox';

import './index.scss';

const FeatureGrid = ({ featureList }) => (
    <div className="bg-black">
        <div className="container px-4 py-5" id="hanging-icons">
            <div className="row g-4 py-5 row-cols-1 row-cols-sm-3">
                { featureList.map(({ title, description }, index) => ( <FeatureBox title={title} description={description} key={index}/> )) }
            </div>
        </div>
    </div>
);

export default FeatureGrid;
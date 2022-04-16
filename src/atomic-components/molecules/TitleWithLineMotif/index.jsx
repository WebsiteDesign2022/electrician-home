import React from 'react';
import TopLeftTriangle from '../../atoms/TopLeftTriangle';

const TitleWithLineMotif = ({ title }) => (
    <div className="border-bottom align-content-start border-dark align-content-start col-3">
        <TopLeftTriangle color="black"/>
        <h3 align="left">{title}</h3>
    </div>    
);

export default TitleWithLineMotif;
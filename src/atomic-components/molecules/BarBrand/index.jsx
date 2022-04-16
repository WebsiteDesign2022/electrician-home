import React from 'react';
import { Navbar } from 'react-bootstrap';

const BarBrand = ({ brandName }) => (
    <Navbar.Brand className="px-4 navbar-brand">
        {brandName}
    </Navbar.Brand>
)

export default BarBrand;

import React from 'react';
import { Nav } from 'react-bootstrap';
import NavBarButton from '../../atoms/NavBarButton';

const navBarButtons = [
    {
        link: '#home',
        displayName: 'Home'
    },
    {
        link: '#landing',
        displayName: 'Landing'
    },
    {
        link: '#service',
        displayName: 'Service'
    },
    {
        link: '#about',
        displayName: 'About'
    },
    {
        link: '#contact',
        displayName: 'Contact'
    },
    {
        link: '#services',
        displayName: 'Services'
    },
    {
        link: '#project',
        displayName: 'Project'
    },
    {
        link: '#portfolio',
        displayName: 'Portfolio'
    }
];

const BarButtons = () => (
    <Nav className="justify-content-end collapse navbar-collapse navbar-collapse-md">
        { navBarButtons.map(({ link, displayName }) => <NavBarButton key={link} link={link} displayName={displayName} />) }
    </Nav>
);

export default BarButtons;

import React from 'react';
import { Nav } from 'react-bootstrap';

const NavBarButton = ({ link, displayName }) => (
    <Nav.Link className="" href={link}>{displayName}</Nav.Link>
);

export default NavBarButton;

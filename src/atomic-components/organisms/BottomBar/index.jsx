
import React from 'react';

import { Nav, Navbar } from 'react-bootstrap';

import AuthorMark  from '../../molecules/AuthorMark';

import SocialMediaButtonGroup from '../../molecules/SocialMediaButtonGroup';

import './index.scss';

// TODO: Extract text-content. (Commented Eugene, 16APR22)
const BottomBar = () => (
    <Navbar bg="dark" variant="dark" className="navbar align-items-center">
        <Nav className="nav col-md-8 mx-4 author-mark">
            <AuthorMark text="Designed by ... | Powered by ... " />
        </Nav>
        
        <div className="col-md-3 justify-content-end">
            <SocialMediaButtonGroup />
        </div>
    </Navbar>
);

export default BottomBar;

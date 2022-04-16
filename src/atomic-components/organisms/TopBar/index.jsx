import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import BarBrand from '../../molecules/BarBrand';
import BarButtons from '../../molecules/BarButtons';
import './index.scss';

const TopBar = () => (
  <Navbar collapseOnSelect class="navbar navbar-expand-sm" bg="light" variant="light">
    <Container>

      <BarBrand brandName={"Electrician Home"}/>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />

      <Navbar.Collapse id="responsive-navbar-nav">
        <BarButtons />
      </Navbar.Collapse>

    </Container>
  </Navbar>
);

export default TopBar;

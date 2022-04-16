import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import BarBrand from '../../molecules/BarBrand';
import BarButtons from '../../molecules/BarButtons';

const TopBar = () => (
  <Navbar bg="light" variant="light">
    <Container className=".navbar-expand-lm">

      <BarBrand brandName={"Electrician Home"}/>
      
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <BarButtons />
      </div>

    </Container>
  </Navbar>
);

export default TopBar;

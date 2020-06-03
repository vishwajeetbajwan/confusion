import React from 'react';
import './App.css';

import { Navbar, NavbarBrand } from 'reactstrap';

const App = () => {
  return (
    <div className="App">
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
    </div>
  );
};

export default App;

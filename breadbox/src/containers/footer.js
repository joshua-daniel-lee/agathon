/*jshint esversion: 6 */
import React, { Component } from 'react';
import '../index.css';
import {
  Nav,
  Navbar,
  NavItem,
  NavDropdown,
  MenuItem,
  FormGroup,
  FormControl,
  Button,
  Glyphicon,
} from 'react-bootstrap';

class Footer extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="footer">
        <h5 className="logo">breadbox</h5>
      </div>
    );
  }
}

export default Footer;

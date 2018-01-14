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

class Header extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Navbar staticTop>
        <Navbar.Header>
          <Navbar.Brand className="logo">
            <Glyphicon className="apple" glyph="apple" />
            <a className="logoText" href="/">
              breadbox
            </a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav pullRight>
          <NavItem href="#">Help</NavItem>
          <NavDropdown title="My Account" id="basic-nav-dropdown">
            <MenuItem>Account Settings</MenuItem>
            <MenuItem divider />
            <MenuItem>Sign Out</MenuItem>
            <MenuItem>Dashboard</MenuItem>
            <MenuItem />
          </NavDropdown>
        </Nav>
      </Navbar>
    );
  }
}

export default Header;

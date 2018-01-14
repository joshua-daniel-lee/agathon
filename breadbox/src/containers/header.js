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
  Tooltip,
} from 'react-bootstrap';

class Header extends Component {
  constructor() {
    super();
  }

  redirectDashboard(e) {
    window.location.href = '/dashboard';
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
        <div />
        <Nav pullRight>
          <NavItem href="#">Help</NavItem>
          <NavDropdown title="My Account" id="basic-nav-dropdown">
            <MenuItem>Account Settings</MenuItem>
            <MenuItem divider />
            <MenuItem>Sign Out</MenuItem>
            <MenuItem onClick={this.redirectDashboard.bind(this)}>Dashboard</MenuItem>
            <MenuItem />
          </NavDropdown>
        </Nav>
      </Navbar>
    );
  }
}

export default Header;

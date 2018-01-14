/*jshint esversion: 6 */
import React, { Component } from 'react';
import Header from './header.js';
import '../index.css';
import { ListGroup, ListGroupItem, Glyphicon } from 'react-bootstrap';

class Documents extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Header />
        <div className=" documents container">
          <ListGroup>
            <ListGroupItem>
              <Glyphicon className="glyph-doc" glyph="file" />
              <a href="">Process Preventive Controls</a>
            </ListGroupItem>
            <ListGroupItem>
              <Glyphicon className="glyph-doc" glyph="file" />
              <a href="">Sanitation Preventive Controls</a>
            </ListGroupItem>
            <ListGroupItem>
              <Glyphicon className="glyph-doc" glyph="file" />
              <a href="">Sanitation Preventive Controls</a>
            </ListGroupItem>
            <ListGroupItem>
              <Glyphicon className="glyph-doc" glyph="file" />
              <a href="">Food Safety Plan Report</a>
            </ListGroupItem>
            <ListGroupItem>
              <Glyphicon className="glyph-doc" glyph="file" />
              <a href="">Recordkeeping Procedures</a>
            </ListGroupItem>
          </ListGroup>
        </div>
      </div>
    );
  }
}

export default Documents;

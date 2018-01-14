import React, { Component } from 'react';
import { Panel, Well, Label, Button, Glyphicon } from 'react-bootstrap';
import '../index.css';

class ModuleCard extends Component {
  constructor() {
    super();
  }

  redirectFacility(e) {
    window.location.href = '/facility';
  }

  redirectDocuments(e) {
    window.location.href = '/documents';
  }

  render() {
    return (
      <div className="dashboard container">
        <Panel className="card" onClick={this.redirectFacility.bind(this)}>
          <div className="container">
            <h5 className="moduleHeading">Facility Information</h5>
            <div className="box">
              <Glyphicon glyph="home" />
            </div>
            <Label bsStyle="warning" bs placement="right" className="in" id="tooltip-right">
              In-Progress
            </Label>
          </div>
        </Panel>

        <Panel className="card">
          <div className="container">
            <h5 className="moduleHeading">Good Manufacturing Practices</h5>
            <div className="box">
              <Glyphicon glyph="leaf" />
            </div>
            <Label bsStyle="success" bs placement="right" className="in" id="tooltip-right">
              Finished
            </Label>
          </div>
        </Panel>

        <Panel className="card">
          <div className="container">
            <h5 className="moduleHeading">Hazard Analysis</h5>
            <div className="box">
              <Glyphicon glyph="ban-circle" />
            </div>
            <Label bsStyle="success" bs placement="right" className="in" id="tooltip-right">
              Finished
            </Label>
          </div>
        </Panel>

        <Panel className="card">
          <div className="container">
            <h5 className="moduleHeading">Process Preventive Controls</h5>
            <div className="box">
              <Glyphicon glyph="bell" />
            </div>
            <Label bsStyle="danger" bs placement="right" className="in" id="tooltip-right">
              Incomplete
            </Label>
          </div>
        </Panel>

        <Panel className="card">
          <div className="container">
            <h5 className="moduleHeading">Allergen Preventive Controls</h5>
            <div className="box">
              <Glyphicon glyph="eye-open" />
            </div>
            <Label bsStyle="success" bs placement="right" className="in" id="tooltip-right">
              Finished
            </Label>
          </div>
        </Panel>

        <Panel className="card">
          <div className="container">
            <h5 className="moduleHeading">Sanitation Preventive Controls</h5>
            <div className="box">
              <Glyphicon glyph="alert" />
            </div>
            <Label bsStyle="success" bs placement="right" className="in" id="tooltip-right">
              Finished
            </Label>
          </div>
        </Panel>

        <Panel className="card">
          <div className="container">
            <h5 className="moduleHeading">Supply-Chain Preventive Controls</h5>
            <div className="box">
              <Glyphicon glyph="globe" />
            </div>
            <Label bsStyle="success" bs placement="right" className="in" id="tooltip-right">
              Finished
            </Label>
          </div>
        </Panel>

        <Panel className="card">
          <div className="container">
            <h5 className="moduleHeading">Recall Plan</h5>
            <div className="box">
              <Glyphicon glyph="retweet" />
            </div>
            <Label bsStyle="success" bs placement="right" className="in" id="tooltip-right">
              Finished
            </Label>
          </div>
        </Panel>

        <Panel className="card">
          <div className="container">
            <h5 className="moduleHeading">Reanalysis of Food Safety Plan</h5>
            <div className="box">
              <Glyphicon glyph="repeat" />
            </div>
            <Label bsStyle="success" bs placement="right" className="in" id="tooltip-right">
              Finished
            </Label>
          </div>
        </Panel>

        <Panel className="card">
          <div className="container">
            <h5 className="moduleHeading">Food Safety Plan Report</h5>
            <div className="box">
              <Glyphicon glyph="folder-open" />
            </div>
            <Label bsStyle="success" bs placement="right" className="in" id="tooltip-right">
              Finished
            </Label>
          </div>
        </Panel>

        <Panel className="card">
          <div className="container">
            <h5 className="moduleHeading">Manage Signatures</h5>
            <div className="box">
              <Glyphicon glyph="pencil" />
            </div>
            <Label bsStyle="success" bs placement="right" className="in" id="tooltip-right">
              Finished
            </Label>
          </div>
        </Panel>

        <Panel className="card">
          <div className="container">
            <h5 className="moduleHeading">Recordkeeping Procedures</h5>
            <div className="box">
              <Glyphicon glyph="inbox" />
            </div>
            <Label bsStyle="success" bs placement="right" className="in" id="tooltip-right">
              Finished
            </Label>
          </div>
        </Panel>

        <Panel className="card">
          <div className="container">
            <h5 className="moduleHeading">Important Contacts</h5>
            <div className="box">
              <Glyphicon glyph="comment" />
            </div>
            <Label bsStyle="success" bs placement="right" className="in" id="tooltip-right">
              Finished
            </Label>
          </div>
        </Panel>

        <Panel className="card" onClick={this.redirectDocuments.bind(this)}>
          <div className="container">
            <h5 className="moduleHeading">Supporting Documents</h5>
            <div className="box">
              <Glyphicon glyph="list" />
            </div>
            <Label bsStyle="success" bs placement="right" className="in" id="tooltip-right">
              Finished
            </Label>
          </div>
        </Panel>

        <Panel className="card">
          <div className="container">
            <h5 className="moduleHeading">Add Module</h5>
            <div className="box">
              <Glyphicon glyph="plus" />
            </div>
            <Label bsStyle="success" bs placement="right" className="in" id="tooltip-right">
              Finished
            </Label>
          </div>
        </Panel>
      </div>
    );
  }
}

export default ModuleCard;

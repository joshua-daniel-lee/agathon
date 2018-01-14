import React, { Component } from 'react';
import { Panel, Well, Label, Button, Glyphicon } from 'react-bootstrap';
import '../index.css';

class ModuleCard extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="dashboard container">
        <Panel className="card">
          <h1>Quick Start</h1>
        </Panel>

        <Panel className="card">
          <h1>Facility Information</h1>
        </Panel>

        <Panel className="card">
          <h1>Preliminary Steps</h1>
        </Panel>

        <Panel className="card">
          <h1>Good Manufacturing Practices (GMP) & Other Prerequisite Programs</h1>
        </Panel>

        <Panel className="card">
          <h1>Hazard Analysis & Preventive Controls Determination</h1>
        </Panel>

        <Panel className="card">
          <h1>Process Preventive Controls</h1>
        </Panel>

        <Panel className="card">
          <h1>Food Allergen Preventive Controls</h1>
        </Panel>

        <Panel className="card">
          <h1>Sanitation Preventive Controls</h1>
        </Panel>

        <Panel className="card">
          <h1>Supply-Chain Preventive Controls</h1>
        </Panel>

        <Panel className="card">
          <h1>Supply-Chain Preventive Controls</h1>
        </Panel>

        <Panel className="card">
          <h1>Recall Plan</h1>
        </Panel>

        <Panel className="card">
          <h1>Reanalysis of Food Safety Plan</h1>
        </Panel>

        <Panel className="card">
          <h1>Food Safety Plan</h1>
        </Panel>

        <Panel className="card">
          <h1>Signature</h1>
        </Panel>

        <Panel className="card">
          <h1>Recordkeeping Procedures</h1>
        </Panel>

        <Panel className="card">
          <h1>Important Contacts</h1>
        </Panel>

        <Panel className="card">
          <h1>Supporting Documents </h1>
        </Panel>

        <Panel className="card">
          <h1>Add Module</h1>
        </Panel>
      </div>
    );
  }
}

export default ModuleCard;

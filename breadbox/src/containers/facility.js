/*jshint esversion: 6 */
import React, { Component } from 'react';
import Header from './header.js';
import '../index.css';
import { Button, Panel, FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';

class Facility extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ' ',
      address: ' ',
      email: ' ',
      phone: ' ',
      list: ' ',
    };
  }

  handleChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  handleChangeAddress(e) {
    this.setState({
      address: e.target.value,
    });
  }

  handleChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  handleChangePhone(e) {
    this.setState({
      phone: e.target.value,
    });
  }

  handleChangeList(e) {
    this.setState({
      list: e.target.value,
    });
  }

  handleSubmit(e) {
    this.setState({
      name: this.state.name,
      address: this.state.address,
      phone: this.state.phone,
      list: this.state.list,
    });
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <Panel bsStyle="danger">
            <Panel.Heading>
              <Panel.Title componentClass="h3">WARNING</Panel.Title>
            </Panel.Heading>
            <Panel.Body>Verify your Email</Panel.Body>
          </Panel>
        </div>
        <div className="container">
          <h1>Facility Information</h1>
          <Panel className="mainForm">
            <div className="container">
              <form onSubmit={this.handleSubmit.bind(this)}>
                <FormGroup controlId="formBasicText">
                  <ControlLabel className="formText">Facility/Company Name</ControlLabel>
                  <FormControl
                    type="text"
                    value={this.state.name}
                    placeholder="Facility or Company Name"
                    onChange={this.handleChangeName.bind(this)}
                  />
                  <FormControl.Feedback />
                  <HelpBlock>Here is some helpful text</HelpBlock>
                </FormGroup>
                <br />
                <FormGroup controlId="formBasicText">
                  <ControlLabel className="formText">Address</ControlLabel>
                  <FormControl
                    type="text"
                    value={this.state.address}
                    placeholder="Adress, City, State, Zip Code"
                    onChange={this.handleChangeAddress.bind(this)}
                  />
                  <FormControl.Feedback />
                  <HelpBlock>Here is some helpful text</HelpBlock>
                </FormGroup>
                <br />
                <FormGroup controlId="formBasicText">
                  <ControlLabel className="formText">Email</ControlLabel>
                  <FormControl
                    type="text"
                    value={this.state.email}
                    placeholder="Email"
                    onChange={this.handleChangeEmail.bind(this)}
                  />
                  <FormControl.Feedback />
                  <HelpBlock>Here is some helpful text</HelpBlock>
                </FormGroup>
                <br />
                <label className="phone">Phone</label>
                <select
                  type="drop"
                  value={this.state.list}
                  onChange={this.handleChangeList.bind(this)}
                >
                  <option value="nothing" />
                  <option value="Mobile">Mobile</option>
                  <option value="Work">Work</option>
                  <option value="Home">Home</option>
                </select>
                <ControlLabel className="formText" />
                <FormControl
                  type="text"
                  value={this.state.phone}
                  placeholder="Enter number"
                  onChange={this.handleChangePhone.bind(this)}
                />
                <FormControl.Feedback />
                <HelpBlock>Here is some helpful text</HelpBlock>
                <Button className="submitButton" bsStyle="default" type="submit">
                  Submit
                </Button>
                <br />
              </form>
            </div>
          </Panel>
        </div>
      </div>
    );
  }
}

export default Facility;

import React, { Component } from 'react';
import { Grid, Row, Col, 
    FormGroup, ControlLabel, FormControl, Button 
} from 'react-bootstrap';
import { generate } from 'shortid';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.emailId = generate();
    this.nameId = generate();
    this.phoneId = generate();
    this.channelId = generate();
    this.otherlId = generate();
  }
  render() {
    return (
      <Grid>
        <Row>
            <Col xs={10} xsOffset={1} sm={6} smOffset={3}>
                <h3> Sign Up </h3>
            </Col>
        </Row>
        <Row>
            <Col xs={10} xsOffset={1} sm={6} smOffset={3}>
                <form>
                <FormGroup controlId={this.emailId}>
                    <ControlLabel>Email</ControlLabel>
                    <FormControl
                    type="text"
                    placeholder="Enter email"
                    />
                    <FormControl.Feedback />
                </FormGroup>
                <FormGroup controlId={this.nameId}>
                    <ControlLabel>Name</ControlLabel>
                    <FormControl
                        type="text"
                        placeholder="Enter Your Name"
                    />
                    <FormControl.Feedback />
                </FormGroup>
                <FormGroup controlId={this.phoneId}>
                    <ControlLabel>Phone</ControlLabel>
                    <FormControl
                        type="number"
                        placeholder="Phone Number"
                    />
                    <FormControl.Feedback />
                </FormGroup>
                <FormGroup controlId={this.channelId}>
                    <ControlLabel>Channel</ControlLabel>
                    <FormControl componentClass="select" placeholder="please select">
                        <option value="google">Google</option>
                        <option value="facebook">Facebook</option>
                    </FormControl>
                    <FormControl.Feedback />
                </FormGroup>
                <FormGroup controlId={this.otherId}>
                    <ControlLabel>Other</ControlLabel>
                    <FormControl
                        componentClass="textarea"
                        type="text"
                        placeholder="What other channels did you hear about us?"
                    />
                    <FormControl.Feedback />
                </FormGroup>
                <Button>Submit</Button>
                </form>
            </Col>
        </Row>
      </Grid>
    );
  }
}

export default Signup;

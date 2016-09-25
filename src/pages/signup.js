import React, { Component } from 'react';
import { Grid, Row, Col, 
    FormGroup, ControlLabel, FormControl, Button 
} from 'react-bootstrap';
import { generate } from 'shortid';
import UserStore from '../stores/userStore';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.emailId = generate();
    this.nameId = generate();
    this.phoneId = generate();
    this.channelId = generate();
    this.otherlId = generate();
    this.state = {
        email: '',
        phone: '',
        name: '',
        channel: 'google',
        other: '',
		type: 'student',
		lessons: [],
		id: '',
    }
  }
   handleChange = (label) => {
        return function (e) {
            let state = {};
            state[label] = e.target.value;
            this.setState(state);
        }.bind(this);
    }
  getValidationState = (label) => {
    const length = this.state["email"].length;
    if (length > 5) return 'success';
    else if (length > 3) return 'warning';
    else if (length > 0) return 'error';
  }
  onSubmit = (e) => {
      e.preventDefault();
	  console.log(this.state);
      UserStore.add(this.state);
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
                <form onSubmit={this.onSubmit.bind(this)}>
                        <FormGroup 
                            controlId={this.emailId} 
                            validationState={this.getValidationState()}>
                            <ControlLabel>Email</ControlLabel>
                            <FormControl
                            type="text"
                            placeholder="Enter email"
                            value={this.state.email}
                            onChange={this.handleChange('email')}
                            />
                            <FormControl.Feedback />
                        </FormGroup>
                        <FormGroup 
                            controlId={this.phoneId}>
                            <ControlLabel>Phone</ControlLabel>
                            <FormControl
                                type="number"
                                placeholder="Phone Number"
                                value={this.state.phone}
                                onChange={this.handleChange('phone')}/>
                            <FormControl.Feedback />
                        </FormGroup>
                        <FormGroup controlId={this.nameId}>
                            <ControlLabel>Name</ControlLabel>
                            <FormControl
                                type="text"
                                placeholder="Enter Your Name"
                                value={this.state.name}
                                onChange={this.handleChange('name')}/>
                            <FormControl.Feedback />
                        </FormGroup>
                        <FormGroup controlId={this.channelId}>
                            <ControlLabel>Channel</ControlLabel>
                            <FormControl 
                                componentClass="select"
                                placeholder="please select"
                                value={this.state.channel}
                                onChange={this.handleChange('channel')}>
                                <option value="google">Google</option>
                                <option value="facebook">Facebook</option>
                            </FormControl>
                            <FormControl.Feedback />
                        </FormGroup>
                        <FormGroup 
                            controlId={this.otherId}
                            value={this.state.other}
                            onChange={this.handleChange('other')}>
                            <ControlLabel>Other</ControlLabel>
                            <FormControl
                                componentClass="textarea"
                                type="text"
                                placeholder="What other channels did you hear about us?"/>
                            <FormControl.Feedback />
                        </FormGroup>
                        <Button type="submit">Submit</Button>
                </form>
            </Col>
        </Row>
      </Grid>
    );
  }
}

export default Signup;

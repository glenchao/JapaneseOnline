import React, { Component } from 'react';
import {
    Grid, Row, Col,
    FormGroup, ControlLabel, FormControl, Button
} from 'react-bootstrap';
import { generate } from 'shortid';

class Login extends Component {
    constructor(props) {
        super(props);
        this.emailId = generate();
        this.passwordId = generate();
    }
    render() {
        return (
            <Grid>
                <Row>
                    <Col xs={10} xsOffset={1} sm={6} smOffset={3}>
                        <h3>Login</h3>
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
                            <FormGroup controlId={this.passwordId}>
                                <ControlLabel>Password</ControlLabel>
                                <FormControl
                                    type="text"
                                    placeholder="Enter password"
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

export default Login;

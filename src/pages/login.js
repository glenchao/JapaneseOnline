import React, { Component } from 'react';
import {
    Grid, Row, Col,
    FormGroup, ControlLabel, FormControl, Button
} from 'react-bootstrap';
import { generate } from 'shortid';
import UserLogin from '../stores/userLogin';

class Login extends Component {
    constructor(props) {
        super(props);
        this.emailId = generate();
        this.passwordId = generate();
    }
    onSubmit = (e) => {
        e.preventDefault();
        let email = e.target.email.value;
        let password = e.target.password.value;
        UserLogin.loginFirebase(email, password);
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
                        <form onSubmit={this.onSubmit.bind(this)}>
                            <FormGroup controlId={this.emailId}>
                                <ControlLabel>Email</ControlLabel>
                                <FormControl
                                    type="text"
                                    name="email"
                                    placeholder="Enter email"
                                    />
                                <FormControl.Feedback />
                            </FormGroup>
                            <FormGroup controlId={this.passwordId}>
                                <ControlLabel>Password</ControlLabel>
                                <FormControl
                                    type="password"
                                    name="password"
                                    placeholder="Enter password"
                                    />
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

export default Login;
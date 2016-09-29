import React, { Component } from 'react';
import {
    Grid, Row, Col,
    FormGroup, ControlLabel, FormControl, Button
} from 'react-bootstrap';
import { generate } from 'shortid';
import UserLogin from '../stores/userLoginLogout';
import firebase from 'firebase';

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
        UserLogin.loginFirebase(email, password).then((user) => {
            firebase.database().ref('user/'+user.uid).once("value").then((snapshot) => {
                let type = snapshot.val().type;
                console.log(type);
                let link = type === 'student' ? '/admin/schedule/student' : '/admin/schedule';
                this.context.router.push(link);
            });
        });
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

// add this whenever you need this.context.router
// to programmatically navigate with react router
Login.contextTypes = {
    router: React.PropTypes.object
};

export default Login;
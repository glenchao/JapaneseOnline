import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import { generate } from 'shortid';

class Login extends Component {
    constructor(props) {
        super(props);
        this.emailId = generate();
    }
    render() {
        return (
            <div>
                Login
                <form>
                    <FormGroup
                        controlId={this.emailId}
                        >
                        <ControlLabel>Email</ControlLabel>
                        <FormControl
                            type="text"
                            placeholder="Enter text"
                            />
                        <FormControl.Feedback />
                    </FormGroup>
                </form>
            </div>
        );
    }
}

export default Login;

import React from 'react';
import { generate } from 'shortid';
import {
    FormGroup, ControlLabel, FormControl, HelpBlock
} from 'react-bootstrap';

class InfoForm extends React.Component {
    constructor(props) {
        super(props);
        this.ids = {
            name: generate(),
            email: generate(),
            exp: generate()
        };
    }
    render() {
        let user = this.props.user;
        return (
            <form onChange={this.handleChange} onSubmit={this.onSubmit}>
                <FormGroup controlId={this.ids.name}>
                    <ControlLabel>Name</ControlLabel>
                    <FormControl type="text" name="name" value={user.name} placeholder="i.e. Jane Smith" readOnly />
                    <FormControl.Feedback />
                    <HelpBlock></HelpBlock>
                </FormGroup>
                <FormGroup controlId={this.ids.email}>
                    <ControlLabel>Email</ControlLabel>
                    <FormControl type="email" name="email" value={user.email} placeholder="i.e. janesmith@email.com" readOnly />
                    <FormControl.Feedback />
                    <HelpBlock></HelpBlock>
                </FormGroup>
                <FormGroup controlId={this.ids.exp}>
                    <ControlLabel>Expierence</ControlLabel>
                    <FormControl componentClass="textarea" name="exp" value={user.exp} placeholder="i.e. so smart" readOnly />
                    <FormControl.Feedback />
                    <HelpBlock></HelpBlock>
                </FormGroup>
                <input type="submit" style={{display: "none"}} />
            </form>
        );
    }

    handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        let user = Object.assign({}, this.props.user);
        user[name] = value;
        if (this.props.onChange) {
            this.props.onChange(user);
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (this.props.onSubmit) {
            this.props.onSubmit(this.props.user);
        }
        return false;
    }
}

export default InfoForm;
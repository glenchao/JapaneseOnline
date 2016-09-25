import React, { Component } from 'react';
import { generate } from 'shortid';
import {
    Image,
    Grid, Row, Col,
    FormGroup, ControlLabel, FormControl, HelpBlock
} from 'react-bootstrap';

class Info extends Component {
    constructor(props) {
        super(props);
        this.ids = {
            name: generate(),
            email: generate(),
            exp: generate()
        };
        this.state = {
            name: "",
            email: "",
            exp: ""
        };
    }
    render() {
        return (
            <Grid>
                <Row>
                    <Col xs={12} sm={4}>
                        <Image src="http://jli.co.jp/common/images/top_img31.jpg" thumbnail responsive />
                    </Col>
                    <Col xs={12} sm={4}>
                        <form>
                            <FormGroup  controlId={this.ids.name}>
                                <ControlLabel>Name</ControlLabel>
                                <FormControl type="text" name="name" value={this.state.name} placeholder="i.e. Jane Smith" onChange={this.handleChange} />
                                <FormControl.Feedback />
                                <HelpBlock></HelpBlock>
                            </FormGroup>
                            <FormGroup  controlId={this.ids.email}>
                                <ControlLabel>Email</ControlLabel>
                                <FormControl type="email" name="email" value={this.state.email} placeholder="i.e. janesmith@email.com" onChange={this.handleChange} />
                                <FormControl.Feedback />
                                <HelpBlock></HelpBlock>
                            </FormGroup>
                            <FormGroup  controlId={this.ids.exp}>
                                <ControlLabel>Expierence</ControlLabel>
                                <FormControl componentClass="textarea" name="exp" value={this.state.exp} placeholder="i.e. so smart" onChange={this.handleChange} />
                                <FormControl.Feedback />
                                <HelpBlock></HelpBlock>
                            </FormGroup>
                        </form>
                    </Col>
                </Row>
            </Grid>
        );
    }

    handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        let state = Object.assign({}, this.state);
        state[name] = value;
        this.setState(state);
    }
}

export default Info;

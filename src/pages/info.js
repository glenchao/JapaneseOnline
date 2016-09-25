import React, { Component } from 'react';
import {
    Image,
    Grid, Row, Col
} from 'react-bootstrap';

import InfoForm from '../components/infoForm';

class Info extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
            name: "",
            email: "",
            exp: ""
        }};
    }
    onUserInfoFormSubmit = (user) => {
        console.log("submit", user);
    }
    onUserInfoFormChange = (user) => {
        console.log(user);
        this.setState({ user: user });
    }
    render() {
        return (
            <Grid>
                <Row>
                    <Col xs={12} sm={4}>
                        <Image src="http://jli.co.jp/common/images/top_img31.jpg" thumbnail responsive />
                    </Col>
                    <Col xs={12} sm={4}>
                        <InfoForm user={this.state.user} onChange={this.onUserInfoFormChange} onSubmit={this.onUserInfoFormSubmit} />
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default Info;

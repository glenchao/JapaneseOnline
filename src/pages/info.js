import React, { Component } from 'react';
import UserStore from '../stores/userStore';
import {
    Image,
    Grid, Row, Col
} from 'react-bootstrap';

import InfoForm from '../components/infoForm';
import teacher1 from '../images/teacher1Profile.jpg';
import teacher2 from '../images/teacher2Profile.jpg';

let style = {
    margin: "0 auto",
}

class Info extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
            name: UserStore.name,
            email: UserStore.email,
            exp: "1 year"
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
        let img = "http://jli.co.jp/common/images/top_img31.jpg";
        if (UserStore.uid === "o0woVBThmSgJjGa19f0CZdYf0bE3") {
            img = teacher1;
        } else if (UserStore.uid === "ZKvvvv0kBkZnstGLoXhBGQfJiNo2") {
            img = teacher2;
        }
        return (
            <Grid>
                <Row>
                    <Col xs={12} xsOffset={0} sm={6} smOffset={3} md={6} mdOffset={3} lg={6} lgOffset={3}>
                        <Image style={style} src={img} thumbnail responsive />
                    </Col>
                    <Col xs={12} xsOffset={0} sm={6} smOffset={3} md={6} mdOffset={3} lg={6} lgOffset={3}>
                        <InfoForm user={this.state.user} onChange={this.onUserInfoFormChange} onSubmit={this.onUserInfoFormSubmit} />
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default Info;

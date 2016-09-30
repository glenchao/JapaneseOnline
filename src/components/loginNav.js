import React, { Component } from 'react';
import { Nav, NavItem, Col } from 'react-bootstrap';

let style = {
    color: "black",
    backgroundColor: "lightgrey",
}

class LoginNav extends Component {
    handleSelect = (eventKey) => {
        this.context.router.push(eventKey);
    }
    render() {
        return (
        <Col xs={12} xsOffset={0} sm={10} smOffset={1} md={10} mdOffset={1} lg={8} lgOffset={2}>
            <Nav bsStyle="tabs" justified onSelect={this.handleSelect}>
                <NavItem style={style} eventKey="/login">Login</NavItem>
                <NavItem style={style} eventKey="/signup">Sign Up</NavItem>
            </Nav>
        </Col>
        );
    }
}

// add this whenever you need this.context.router
// to programmatically navigate with react router
LoginNav.contextTypes = {
    router: React.PropTypes.object
};

export default LoginNav;

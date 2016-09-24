import React, { Component } from 'react';
import { Nav, NavItem } from 'react-bootstrap';

class LoginNav extends Component {
    handleSelect = (eventKey) => {
        this.context.router.push(eventKey);
    }
    render() {
        return (
        <div>
            <Nav bsStyle="tabs" justified onSelect={this.handleSelect}>
                <NavItem eventKey="/login">Login</NavItem>
                <NavItem eventKey="/signup">Sign Up</NavItem>
            </Nav>
        </div>
        );
    }
}

// add this whenever you need this.context.router
// to programmatically navigate with react router
LoginNav.contextTypes = {
    router: React.PropTypes.object
};

export default LoginNav;

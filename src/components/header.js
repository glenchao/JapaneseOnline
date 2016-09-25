import React, { Component } from 'react';
import UserLogin from '../stores/userLoginLogout';
import {
    Navbar, Nav, NavItem
} from 'react-bootstrap';

class Header extends Component {
    handleSelect = (eventKey) => {
        this.context.router.push(eventKey);
    }
    logout = (eventKey) => {
        UserLogin.logoutFirebase().then((user) => {
            this.context.router.push(eventKey);
        });
    }
    render() {
        return (
            <Navbar inverse>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a>Japanese Online</a>
                    </Navbar.Brand>
                    <Navbar.Toggle ref="toggle" />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav onSelect={this.handleSelect}>
                        <NavItem eventKey="/schedule">Schedule</NavItem>
                        <NavItem eventKey="/info">Info</NavItem>
                        <NavItem eventKey="/login" onSelect={this.logout}> Log Out</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

// add this whenever you need this.context.router
// to programmatically navigate with react router
Header.contextTypes = {
    router: React.PropTypes.object
};

export default Header;

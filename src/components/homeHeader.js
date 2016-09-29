import React, { Component } from 'react';
import UserStore from '../stores/userStore';
import {
    Navbar, Nav, NavItem
} from 'react-bootstrap';

let style = {
    nav: {
        backgroundColor: "white",
        border: "none",
    },
    navFont: {
        color: "#f05f40",
    },
    navToggle: {
        backgroundColor: "#ddd",
        border: "none",
    },
}


class HomeHeader extends Component {
    handleSelect = (eventKey) => {
        this.context.router.push(eventKey);
    }
    render() {
        return (
            <Navbar style={style.nav} inverse>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a style={style.navFont} href="/">Home </a>
                        <a>/ {UserStore.email}</a>
                    </Navbar.Brand>
                    <Navbar.Toggle style={style.navToggle} ref="toggle" />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav onSelect={this.handleSelect}>
                        <NavItem>Our Service</NavItem>
                        <NavItem>Teachers</NavItem>
                        <NavItem>Start Learning</NavItem>
                        <NavItem>Who Are We</NavItem>
                        <NavItem eventKey="/login">Log In / Sign Up</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

// add this whenever you need this.context.router
// to programmatically navigate with react router
HomeHeader.contextTypes = {
    router: React.PropTypes.object
};

export default HomeHeader;

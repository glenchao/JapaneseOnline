import React, { Component } from 'react';
import { Link } from 'react-router';
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
        color: "black",
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
                        <Link style={style.navFont} to="/">Home </Link>
                        <a>/ {UserStore.email}</a>
                    </Navbar.Brand>
                    <Navbar.Toggle style={style.navToggle} ref="toggle" />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav style={style.navFont}>
                        <NavItem href="#services">Our Service</NavItem>
                        <NavItem href="#teachers">Teachers</NavItem>
                        <NavItem onSelect={this.handleSelect} eventKey="/signup">Start Learning</NavItem>
                        <NavItem onSelect={this.handleSelect} eventKey="/aboutUs">Who Are We</NavItem>
                        <NavItem onSelect={this.handleSelect} eventKey="/admin">My Account</NavItem>
                        <NavItem onSelect={this.handleSelect} eventKey="/login">Log In / Sign Up</NavItem>
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

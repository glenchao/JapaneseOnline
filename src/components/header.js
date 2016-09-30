import React, { Component } from 'react';
import { Link } from 'react-router';
import UserLogin from '../stores/userLoginLogout';
import UserStore from '../stores/userStore';
import {
    Navbar, Nav, NavItem,
    Tooltip
} from 'react-bootstrap';

let style = {
    backgroundColor: "lightgrey",
    border: "none",
}

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
        let book = null;
        if (UserStore.accountType === 'teacher') {
            console.log()
            book = null;
        } else {
            book = (
                <NavItem eventKey="/admin/book">
                    Book
                    <div>
                        <Tooltip placement="bottom" className="in" id="tooltip-right">
                            Click Here to Book Your Lesson!
                        </Tooltip>
                    </div><br/>
                </NavItem>
            );
        }
        return (
            <Navbar inverse style={style}>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">Home </Link>
                        <a>/ {UserStore.email}</a>
                    </Navbar.Brand>
                    <Navbar.Toggle style={style} ref="toggle" />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav onSelect={this.handleSelect}>
                        <NavItem eventKey={UserStore.scheduleLink}>Schedule</NavItem>
                        <NavItem eventKey="/admin/info">Your Profile</NavItem>
                        {book}
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

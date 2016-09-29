import React, { Component } from 'react';
import UserLogin from '../stores/userLoginLogout';
import UserStore from '../stores/userStore';
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
        let book = null;
        if (UserStore.accountType === 'teacher') {
            console.log()
            book = null;
        } else {
            book = (<NavItem eventKey="/admin/book">Book</NavItem>);
        }
        return (
            <Navbar inverse>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">Home </a>
                        <a>/ {UserStore.email}</a>
                    </Navbar.Brand>
                    <Navbar.Toggle ref="toggle" />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav onSelect={this.handleSelect}>
                        <NavItem eventKey={UserStore.scheduleLink}>Schedule</NavItem>
                        <NavItem eventKey="/admin/info">Info</NavItem>
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

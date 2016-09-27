import React, { Component } from 'react';
import UserLogin from '../stores/userLoginLogout';
import firebase from 'firebase';
import {
    Navbar, Nav, NavItem
} from 'react-bootstrap';

class Header extends Component {
    handleSelect = (eventKey) => {
        this.context.router.push(eventKey);
    }
    checkType = () => {
        let user = firebase.auth().currentUser;
        return firebase.database().ref('user/'+user.uid+'/type').once("value").then((snapshot) => {
            let type = snapshot.val();
            console.log(type);
            this.eventKey = type === 'student' ? '/schedule/student' : '/schedule';
            console.log(this.eventKey);
        });
        // this.eventKey = UserLogin.checkAccountType();
        // console.log(this.eventKey);
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
                        <NavItem eventKey={this.eventKey} onSelect={this.checkType}>Schedule</NavItem>
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

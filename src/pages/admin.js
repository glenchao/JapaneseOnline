import React, { Component } from 'react';
import firebase from 'firebase';
import UserStore from '../stores/userStore';
import '../App.css';

import Header from '../components/header';
import Footer from '../components/footer';

class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = { loading: true }
        this.isStateMounted = true;
        this.unsubAuthListener = firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                UserStore.init(user.uid).then(() => {
                    if (this.isStateMounted) this.setState({ loading: false });
                });
            } else {
                alert("You need to login!");
                this.context.router.push("/login");
            }
        });
    }
    componentWillUnmount() {
        this.isStateMounted = false;
        this.unsubAuthListener();
    }
    render() {
        console.log("App.js is loading", this.state.loading);
        let body = null;
        if (this.state.loading) {
            body = <Loading />;
        } else {
            body = (<div>
                        <Header />
                        <div>
                            {this.props.children}
                        </div>
                        <br />
                        <Footer/>
                    </div>);
        }
        return (
            <div>{body}</div>
        );
    }
}

class Loading extends Component {
    render() {
        return <div>loading...</div>
    }
}

// add this whenever you need this.context.router
// to programmatically navigate with react router
Admin.contextTypes = {
    router: React.PropTypes.object
};

export default Admin;
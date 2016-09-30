import React, { Component } from 'react';
import HomeHeader from '../components/homeHeader';
import Footer from '../components/footer';
import '../App.css';

import LoginNav from '../components/loginNav';

class LoginMain extends Component {
    render() {
        return (
        <div className="App">
            <HomeHeader />
                <LoginNav />
                <div className="App-intro">
                    {this.props.children}
                </div>
                <br />
            <Footer />
        </div>
        );
    }
}

export default LoginMain;

import React, { Component } from 'react';
import '../App.css';

import LoginNav from '../components/loginNav';

class LoginMain extends Component {
    render() {
        return (
        <div className="App">
            <LoginNav />
            <div className="App-intro">
                {this.props.children}
            </div>
        </div>
        );
    }
}

export default LoginMain;

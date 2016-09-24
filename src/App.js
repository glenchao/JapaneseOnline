import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/header';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <Header />
                </div>
                <div className="App-intro">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default App;

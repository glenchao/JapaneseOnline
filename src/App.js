import React, { Component } from 'react';
import HomeHeader from './components/homeHeader';
import Footer from './components/footer';
import './App.css';

class App extends Component {
    render() {
        return (
            <div>
                <HomeHeader />
                {this.props.children}
                <br />
                <Footer />
            </div>
        );
    }
}

export default App;

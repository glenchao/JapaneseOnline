import React, { Component } from 'react';
import { Link } from 'react-router';

class Header extends Component {
  render() {
    return (
      <div>
        <Link to="/schedule">Schedule</Link><br/>
        <Link to="/info">Info</Link><br/>
        <Link to="/login">Login</Link>
      </div>
    );
  }
}

export default Header;

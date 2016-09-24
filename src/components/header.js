import React, { Component } from 'react';
import { Link } from 'react-router';

class Header extends Component {
  render() {
    return (
      <div>
        <Link to="/schedule">Schedule</Link>
        <Link to="/info">Info</Link>
      </div>
    );
  }
}

export default Header;

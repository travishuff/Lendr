import React, { Component } from 'react';
import { Link } from 'react-router';

class Start extends Component {
  
  render() {
    return (
      <div>
        <h1>Lendr</h1>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
        {this.props.children}
      </div>
    );
  }
}

export default Start;
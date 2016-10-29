import React, { Component } from 'react';
import { Link } from 'react-router';

class Start extends Component {

  render() {
    return (
      <div className="start-container">
        <div className="start-contents">
          <h1>Lendr</h1>
          <br />
          <h3>borrow stuff from your friends.</h3>
          <br />
          <br />
          {this.props.children}
          <Link to="/login" className="btn btn-primary start-btn">Login</Link>
          <Link to="/signup" className="btn btn-primary start-btn">Signup</Link>
        </div>
      </div>
    );
  }
}

export default Start;
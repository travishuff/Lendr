import React, { Component } from 'react';
import { Link } from 'react-router';

class Start extends Component {

  render() {
    return (
      <div className="start-container">
        <div className="start-contents">
          <h1>Lendr</h1>
          <br />
          <h3>share stuff with your friends.</h3>
          <br />
          <br />
          {this.props.children}
          <Link to="/login" className="btn btn-primary start-btn">Login</Link>
          <Link to="/signup" className="btn btn-primary start-btn">Signup</Link>
          
          <form method="get" action="/github/auth">
            <button type="submit">Login with GitHub</button>
          </form>
          
        </div>
      </div>
    );
  }
}

export default Start;
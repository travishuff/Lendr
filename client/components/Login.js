import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';

class Login extends Component {

  verifyUser(event) {
    // need this
    event.preventDefault();

    // access username and password values
    const username = event.target.elements[0].value;
    const password = event.target.elements[1].value;

    // TO DO: Fill in Post Request Here
    // Place push method within request callback
    // If error, got back to login page

    // push session to the below path
    browserHistory.push('/browse')
  }

  render() {
    return (
      <div>
        <form className="form-inline" onSubmit={this.verifyUser}>
          <div className="form-group">
            Username: <input type="text" className="form-control" name="username" placeholder="username" /><br />
          </div>
          <div className="form-group">
            Password: <input type="password" className="form-control" name="password" placeholder="password" /><br />
          </div>
          <button type="submit" className="btn btn-success">Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
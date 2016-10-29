import React, { Component } from 'react';
import { Link } from 'react-router';

// let divStyle = {
//   backgroundImage: 'url(' + 'http://phandroid.s3.amazonaws.com/wp-content/uploads/2015/01/field-5.jpg' + ')',
//   display: flex
// }

class Start extends Component {

  render() {
    return (
      <div className="start-container">
        <div className="start-contents">
          <h1>Lendr</h1>
          <br />
          <h4>borrow stuff from your friends.</h4>
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
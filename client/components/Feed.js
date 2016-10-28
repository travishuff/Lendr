import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';

//////////////////////////////
// Where our Nav Bar will live
// Toggle through 'Browse' + 'Request'

class Feed extends Component {
  render() {
    return (
      <div>
        <h1>Main Nav Hub</h1>
        <Link to="/browse">Browse!</Link>
        <Link to="/requested">Requested!</Link>
        <Link to="/account">Account!</Link>
        {this.props.children}
      </div>
    );
  }
}

export default Feed;
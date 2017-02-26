import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';

//////////////////////////////
// Where our Nav Bar will live
// Toggle through 'Browse' + 'Request'

class Feed extends Component {
  render() {
    return (
      <div className="feed-container">

        <div className="feed-header-container text-center">
          <h2>Main Nav Hub</h2>
          <div className="feed-navbar">
            <Link className="btn btn-default" activeClassName="btn btn-primary" to="/browse">Browse </Link>
            <Link className="btn btn-default" activeClassName="btn btn-primary" to="/requested">Requested </Link>
            <Link className="btn btn-default" activeClassName="btn btn-primary" to="/userInfo">Account </Link>
            <Link className="btn btn-default" activeClassName="btn btn-primary" to="/">Logout </Link>
          </div>
        </div>

        {this.props.children}
      </div>
    );
  }
}

export default Feed;
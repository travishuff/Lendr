import React, {Component} from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';

class Account extends Component {
  render() {
    return (
      <div className="container">
        <h1>Account Nav Hub</h1>
        <Link to="/browse">Browse </Link>
        <Link to="/userInfo">Account </Link>
        <Link to="/upload">Upload </Link>
        <Link to="/makeRequest">Make Request </Link>
        <Link to="/wishlist">Wishlist </Link>
        {this.props.children}
      </div>
    );
  }
}

export default Account;
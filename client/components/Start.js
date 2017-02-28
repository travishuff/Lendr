import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import axios from 'axios';

class Start extends Component {
  verifyUser(event) {
    event.preventDefault();
    const username = event.target.elements[0].value;
    const password = event.target.elements[1].value;
    const submitData = {
        username: username,
        password: password
    };

    $.ajax({
      type: 'POST',
      url: '/login',
      data: submitData,
      contentType: 'application/json; charset=utf-8',
      dataType: 'json',
      success: function(res) {
        console.log('Verify user was successful');
        browserHistory.push('/home');
      },
      error: function(err) {
        console.error('FAILED VERIFY-USER POST REQUEST:', err);
        browserHistory.push('/');
      }
    })

    // axios.post('/login', submitData)
    // .then((data) => {
    //   console.log('Verify user was successful');
    //   browserHistory.push('/home');
    // })
    // .catch((err) => {
    //     console.error('FAILED VERIFY-USER POST REQUEST:', err);
    //     browserHistory.push('/');
    // });
  }

  createUser(event) {
    event.preventDefault();
    const username = event.target.elements[0].value;
    const password = event.target.elements[1].value;
    const email = event.target.elements[2].value;
    const location = event.target.elements[3].value + ', ' + event.target.elements[4].value;

    axios.post('/signup', {
        username: username,
        password: password,
        email: email,
        location: location,
        karma: 0
    })
    .then((data) => {
      console.log('Create user was successful');
      browserHistory.push('/');
    })
    .catch((err) => {
      console.error('FAILED CREATE-USER POST REQUEST:', err);
      browserHistory.push('/signup');
    });
  }

  render() {
    let children = React.Children.map(this.props.children, (child) => {
      return React.cloneElement(child, {
        verifyUser: this.verifyUser,
        createUser: this.createUser
      });
    });

    return (
      <div className="start">
        <h1>Lendr</h1>
        <h4>share stuff with your friends</h4>
        {children}
      </div>
    );
  }
}

export default Start;

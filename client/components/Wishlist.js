import React, { Component } from 'react';
import axios from 'axios';

class Wishlist extends Component {
  constructor(props) {
    super(props)
    this.state = {
      requested: []
    }
  }

  componentDidMount() {

    //  Get wishlist (ie. all requests this user made) from DB
    axios.get('/wishlist')
    .then((data) => {
      let requestedData = [];
      for (let i = 0; i < data.length; i++) {
        requestedData.push(
          <li>
            {data[i].itemname} {' '}
            {data[i].note} {' '}
            {data[i].lendeename}
          </li>
        )
      }
      this.setState({ requested: requestedData });
    })
    .catch(error => console.error(`Error message: ${error.message}`));
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.requested}
        </ul>
      </div>
    );
  }

}

export default Wishlist;

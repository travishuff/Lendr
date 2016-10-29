import React, { Component } from 'react';

class Wishlist extends Component {
  constructor(props) {
    super(props)
    this.state = {
      requested: []
    }
  }

  componentDidMount() {
    $.get('/wishlist', (data) => {
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
      this.setState({ requested: requestedData })
    })
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
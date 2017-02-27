import React, {Component} from 'react';
import axios from 'axios';

class Requested extends Component {
  constructor(props) {
    super(props)
    this.state = {
      requested: []
    }
  }

  componentDidMount() {
    axios.get('/requested')
    .then((data) => {
      let requestedData = [];
      for (let i = 0; i < data.length; i++) {
        requestedData.push(
          <li>
            From: {data[i].lendeename}<br />
            Item: {data[i].itemname}<br />
            Note: {data[i].note}<br />
            <p></p>
          </li>
        )
      }
      this.setState({requested:requestedData});
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

export default Requested;
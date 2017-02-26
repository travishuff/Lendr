import React, {Component} from 'react';

class Requested extends Component {
  constructor(props) {
    super(props)
    this.state = {
      requested: []
    }
  }

  componentDidMount() {
    // POST request to grab feed data from DB upon component load
    fetch('/requested')
    .then(response => response.text())
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
    });
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
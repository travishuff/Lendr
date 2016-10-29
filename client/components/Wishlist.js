import React, {Component} from 'react'; 

class Wishlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wishlistArr: []
    }
  }
  componentDidMount() {
    // POST request to grab feed data upon component load
    $.get('/wishlist', (data) => {
      let requestedData = [];

      for (let i = 0; i < data.length; i++) {
        requestedData.push(
          <li>
            {data[i].itemname} {' '}
            {data[i].note} {' '}
          </li>
          
        )
      }

      this.setState({
        wishListArr: requestedData
      })
    });
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.wishlistArr}
        </ul>
      </div>
    );
  }


}

export default Wishlist;
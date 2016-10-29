import React, { Component } from 'react';
import FlipCard from 'react-flipcard';

//////////////////////////////
// Render Tile children here
import Tile from './Tile';


class Browse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFlipped: [],
      tileData: []
    };
  }

  componentDidMount() {
    // make post request here

    // set up array length here after post request
    this.setState({
      isFlipped: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
    })
    
  }  


  render() {
    let tiles = [];
    for (let i = 0; i < 15; i++) {
      tiles.push(
        <Tile
          tileId={i}
          passedState={this.state}
          />
      );
    }



    return (
      <div className="browse-body">
        This is your browse feed!
        <div className="tile-container">
          {tiles}
        </div>
      </div>
    );
  }
}

export default Browse;

          // <FlipCard
          //   type="vertical"
          //   disabled={false}
          //   flipped={this.state.isFlipped}
          //   onFlip={this.handleOnFlip}
          //   onKeyDown={this.handleKeyDown}
          //   >
          //   <div>
          //     <div>Front</div>
          //     <button type="button" onClick={this.showBack}>Show back</button>
          //     <div><small>(manual flip)</small></div>
          //   </div>
          //   <div>
          //     <div>Back</div>
          //     <button type="button" ref="backButton" onClick={this.showFront}>Show front</button>
          //   </div>
          // </FlipCard>



  //           showBack() {
  //   this.setState({
  //     isFlipped: true
  //   });
  // }

  // showFront() {
  //   this.setState({
  //     isFlipped: false
  //   });
  // }

  // handleOnFlip(flipped) {
  //   if (flipped) {
  //     this.refs.backButton.getDOMNode().focus();
  //   }
  // }

  // handleKeyDown(e) {
  //   if (this.state.isFlipped && e.keyCode === 27) {
  //     this.showFront();
  //   }
  // }
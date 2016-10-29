import React, { Component } from 'react';
import FlipCard from 'react-flipcard';

class Tile extends Component {
  constructor(props) {
    super(props);

    // Need to bind methods to this specific component in order to work
    this.clickToFlip = this.clickToFlip.bind(this);
    this.handleOnFlip = this.handleOnFlip.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  clickToFlip() {
    if (!this.props.passedState.isFlipped[this.props.tileId]) {
      this.props.passedState.isFlipped[this.props.tileId] = true;
      this.setState({
        isFlipped: this.props.passedState.isFlipped
      });
    } else {
      this.props.passedState.isFlipped[this.props.tileId] = false;
      this.setState({
        isFlipped: this.props.passedState.isFlipped
      });
    }
  }

  // From react-flipcard library - don't remove 
  handleOnFlip(flipped) {
    if (flipped) {
      this.refs.backButton.getDOMNode().focus();
    }
  }

  // Flips back most recent card on 'escape' press
  handleKeyDown(e) {
    if (this.props.passedState.isFlipped[this.props.tileId] && e.keyCode === 27) {
      this.clickToFlip();
    }
  }

  render() {
    return (
      <div className="item-tile" onClick={this.clickToFlip}>
        <FlipCard
          disabled={true}
          flipped={this.props.passedState.isFlipped[this.props.tileId]}
          onFlip={this.props.passedState.handleOnFlip}
          onKeyDown={this.handleKeyDown}
          >
          <div>
            <div>This should be the picture!</div>
          </div>
          <div>
            <div>This should be the description</div>
          </div>
        </FlipCard>
      </div>
    );
  }
}

export default Tile;
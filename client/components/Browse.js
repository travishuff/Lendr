import React, { Component } from 'react';
import { CSSGrid, layout, measureItems, makeResponsive } from 'react-stonecutter';

//////////////////////////////
// Render Tile children here
import Tile from './components/Tile';


class Browse extends Component {
  constructor(props) {
    super(props);
    this.state = [];
  }

  render() {
    const Grid = makeResponsive(measureItems(CSSGrid), {
      maxWidth: 1920,
      minPadding: 100
    });

    let liStyle = {
      backgroundColor: red
    }

    return (
      <div>
        This is your browse feed!
        <CSSGrid
          component="ul"
          columns={5}
          columnWidth={150}
          gutterWidth={5}
          gutterHeight={5}
          layout={layout.pinterest}
          duration={800}
          easing="ease-out"
          >
          <li key="A" itemHeight={150}>A</li>
          <li key="B" itemHeight={120}>B</li>
          <li key="C" itemHeight={170}>C</li>
          <li key="D" itemHeight={170}>D</li>
          <li key="E" itemHeight={170}>E</li>
          <li key="F" itemHeight={170}>F</li>
        </CSSGrid>
      </div>
    );
  }
}

export default Browse;
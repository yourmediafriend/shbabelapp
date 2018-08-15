import React from 'react'
import SVG from 'svgjs';
import { TweenMax, Linear } from 'gsap';

class Dotty extends React.Component {

  constructor(props) {
    super(props);
    this.myRef = React.createRef();

    this.state = {
      container: {x: 100, y: 100},
      rows: 40,
      columns: 40
    }

  }

  componentDidMount() {
    this.setUpSVG();
  }

  setUpSVG(){

    let col = 0;
    let row = 0;

    this.rowArray = [];
    this.circleArray = [];

    this.draw = SVG(this.myRef.current).viewbox(0, 0, 100, 100).attr({'preserveAspectRatio': 'xMidYMid meet'});
    this.nested = this.draw.nested().viewbox(0, 0, 100, 100);
    this.group = this.nested.group();

    this.cirlceDim = {x: (this.state.container.x / this.state.columns) , y: (this.state.container.x / this.state.columns)};

    for (let i = 0; i < (this.state.columns * this.state.rows); i++) {
      this.circle = this.group.circle(this.cirlceDim.x - 1.5 , this.cirlceDim.y - 1.5).move((0.75 + (this.cirlceDim.x * col)),(0.75 + (this.cirlceDim.y * row))).fill('#ffc107');
      this.rowArray.push(this.circle);
      col++;
      if ((i+1)%this.state.columns === 0) {
        // new row
        this.circleArray.push(this.rowArray);
        this.rowArray = [];
        col = 0;
        row ++;
      }
    }

    this.nestedA = this.draw.nested().viewbox(0, 0, 100, 100);
    this.nestedA.polygon('52.711,0 84.521,0 66.561,30.078 84.521,30.078 20.47,99.538 40.81,51.716 28.043,51.716').fill('#fff');
    this.groupMask = this.nested.group().viewbox(0, 0, 100, 100);
    this.maskPolygon = this.groupMask.mask().add(this.nestedA);
    this.nested.maskWith(this.maskPolygon);

  }

  render() {
    return (
      <div ref={this.myRef} style={{width:'91vw',height:'98vh',transform: 'translate3d(38%, -17%, 0px)'}}/>
    );
  }

}


export default Dotty


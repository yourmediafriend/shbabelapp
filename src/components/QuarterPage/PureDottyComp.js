import React from 'react'
import PropTypes from 'prop-types';
import SVG from 'svgjs';
import { TweenMax, Linear } from 'gsap';

import SvgLightening from './media/lightening.svg';


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

    this.rowArray = Array();
    this.circleArray = Array();


    this.draw = SVG(this.myRef.current).viewbox(0, 0, 100, 100).attr({'preserveAspectRatio': 'xMidYMid meet'});
    this.nested = this.draw.nested().viewbox(0, 0, 100, 100);

    this.cirlceDim = {x: (this.state.container.x / this.state.columns) , y: (this.state.container.x / this.state.columns)};
    this.group = this.nested.group();

   // this.group.circle(100,100).fill('#ff00ea');

    for (let i = 0; i < (this.state.columns * this.state.rows); i++) {

      this.circle = this.group.circle(this.cirlceDim.x - 1.5 , this.cirlceDim.y - 1.5).move((0.75 + (this.cirlceDim.x * col)),(0.75 + (this.cirlceDim.y * row))).fill('#ff00ea');
      this.rowArray.push(this.circle);

      col++;

      if ((i+1)%this.state.columns === 0) {
        // new row
        this.circleArray.push(this.rowArray);
        this.rowArray = Array();
        col = 0;
        row ++;
      }
    }

    // TODO: Make mask work with external SVG.
    this.symbol = this.draw.symbol();
    let lightening  = this.nested.use(this.symbol.circle(100,100).fill('#fff'));

 /*
    let lightening  = this.nested.use(SvgLightening);
    console.log(SvgLightening);
*/
    this.groupMask = this.nested.group().viewbox(0, 0, 100, 100);
    this.maskPolygon = this.groupMask.mask().add(lightening);
    this.nested.maskWith(this.maskPolygon);


  }



  render() {
    return (
      <div ref={this.myRef} style={{width:'100vw',height:'100vh',transform: 'translate3d(-25%,0,0)'}}/>
    );
  }

}


export default Dotty


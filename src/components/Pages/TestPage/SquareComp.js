import React from 'react'
import PropTypes from 'prop-types';

import SVG from 'svgjs';
import { TweenMax, Linear } from 'gsap';
import style from './svgAnimationStyles';

import XXX from '../../../media/x.svg';

class Triangle extends React.Component {

  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  componentDidMount() {
    this.createSquare();
  }

  createSquare() {
    // console.log(XXX);
    this.draw = SVG(this.myRef.current).viewbox(0, 0, 100, 100);

   let oof = this.draw.rect(100, 100).attr({'fill': '#5cb85c'});

    this.nested = this.draw.nested().viewbox(0, 0, 100, 100);

    let rect = this.nested.rect(100, 100).attr({'fill': '#fff'});
    let text = this.nested.text('XXXX').move(0, 25).font({ size: 36 }).fill({ color: '#000' });

    //let text = this.nested.use(XXX).move(0, 25).fill({ color: '#000' });

    oof.maskWith(this.nested);



/*


    this.group = this.nested.group();

    let use  = this.draw.use(XXX);
*/




/*
    //make a group based on rect and text

    let text = this.draw.text('XXXX').move(0, 0).font({ size: 36 }).fill({ color: '#ff00ea' });


    rect

    text.maskWith(rect);
*/

/*

    let text = this.draw.text('XXXX').move(0, 0).font({ size: 36 }).fill({ color: '#fff' });
*/




    //let ellipse = this.draw.ellipse(80, 40).move(10, 10).fill('#fff')
    // this.maskPolygon = this.groupMask.mask().add(text.fill('#fff'));
    // this.draw.maskWith(this.maskPolygon);
    /*    let mask = this.draw.mask().add(text).add(rect)
        rect.maskWith(mask)*/


  }







  render() {

    console.log(this.myRef);

    return (
      <div ref={this.myRef}  style={style.svgOuter} />
    );
  }


}


export default Triangle


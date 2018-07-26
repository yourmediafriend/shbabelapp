import React from 'react'
import PropTypes from 'prop-types';

import SVG from 'svgjs';
import { TweenMax, Linear } from 'gsap';
import style from './svgAnimationStyles';

class Triangle extends React.Component {

  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  componentDidMount() {
    this.createSquare();

  }

  componentWillUnmount() {

  }

  createSquare() {

    this.draw = SVG(this.myRef.current).viewbox(0, 0, 100, 100);
    this.group = this.draw.group().move(-50,-50);
    this.groupClip = this.draw.group().viewbox(0, 0, 100, 100);
    this.clipPolygon = this.groupClip.clip().add(this.groupClip.rect(100,100).fill('#000'));
    this.groupClip.clipWith(this.clipPolygon);
    this.groupClip.add(this.group);

    // CLIP - The same as Mask but doesn't allow lines or opacity levels
    this.clip = this.group.clip();

    var line = this.draw.path('M 0,50 300,47.5 300,52.5 z').fill('transparent');
    var yt;

    for (var i = 0; i < 200; i++) {
      yt = 25 * i;
      this.clip.add(line.clone().move(0, yt).fill('#000'));
    }

    this.groupB = this.group.clone();
    this.groupC = this.group.clone();
    this.groupD = this.group.clone();

    var rect = this.group.rect(200,200).fill('rgba(244, 29, 210, 0.7)');
    rect.clipWith(this.clip);
    TweenMax.to(this.group.node, 4, {rotation:'360_cw', transformOrigin:"55% 55%", repeat:-1, ease: Linear.easeNone });

    this.groupB.add(rect.clone().fill('rgba(87, 255, 241, 0.7)').rotate(280));
    TweenMax.to(this.groupB.node, 6, {rotation:'360_ccw', transformOrigin:"center center", repeat:-1, ease: Linear.easeNone });

    this.groupD.add(rect.clone().fill('rgba(254, 217, 4, 0.7)').rotate(180));
    TweenMax.to(this.groupD.node, 10, {rotation:'360_ccw', transformOrigin:"45% 45%", repeat:-1, ease: Linear.easeNone });

    this.groupC.add(rect.clone().fill('rgba(255, 255, 255, 0.7)').rotate(240));
    TweenMax.to(this.groupC.node, 12, {rotation:'360_cw', transformOrigin:"center center", repeat:-1, ease: Linear.easeNone });

  }

  render() {

    console.log(this.myRef);

    return (
      <div ref={this.myRef}  style={style.svgOuter} />
    );
  }


}


export default Triangle


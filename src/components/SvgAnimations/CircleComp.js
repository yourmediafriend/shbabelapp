import React from 'react'
import SVG from 'svgjs';
import { TweenMax, Linear } from 'gsap';

import styles from './svgShapes.scss';
import cx from 'classnames';

class SvgShape extends React.Component {

  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  componentDidMount() {
    this.createCircle();
  }

  componentWillUnmount() {

  }

  createCircle() {
    this.draw = SVG(this.myRef.current).viewbox(0, 0, 100, 100);
    this.group = this.draw.group();

    // CLIP - The same as Mask but doesn't allow lines or opacity levels
    this.clip = this.group.clip();

    let line = this.draw.path('M  0,50 200,46 200,54  z').fill('transparent');
    let yt;

    for (let i = 0; i < 150; i++) {
      yt = 10 * i;
      this.clip.add(line.clone().move(0, yt).fill('#000'));
    }

    this.groupC = this.group.clone();
    this.groupD = this.group.clone();
    this.groupB = this.group.clone();

    let circle = this.group.circle(100, 100).fill('rgba(87, 255, 241, 0.7)');
    circle.clipWith(this.clip);
    TweenMax.to(this.group.node, 10, {rotation:'360_cw', transformOrigin:"center center", repeat:-1, ease: Linear.easeNone });

    let circleB = this.groupB.circle(100, 100).fill('rgba(244, 29, 210, 0.7)');
    circleB.clipWith(this.clip);
    circleB.rotate(180);
    TweenMax.to(this.groupB.node, 10, {rotation:'360_ccw', transformOrigin:"center center", repeat:-1, ease: Linear.easeNone });

    let circleC = this.groupC.circle(100, 100).fill('rgba(254, 217, 4, 0.7)');
    circleC.clipWith(this.clip);
    circleC.rotate(60);
    TweenMax.to(this.groupC.node, 50, {rotation:'360_ccw', transformOrigin:"center center", repeat:-1, ease: Linear.easeNone });

    let circleD = this.groupD.circle(100, 100).fill('rgba(255, 255, 255, 0.7)');
    circleD.clipWith(this.clip);
    circleD.rotate(240);
    TweenMax.to(this.groupD.node, 20, {rotation:'360_cw', transformOrigin:"center center", repeat:-1, ease: Linear.easeNone });

  }

  render() {
    return (
      <div ref={this.myRef} className={cx(styles.svgOuter, styles.circle)}  />
    );
  }
}


export default SvgShape


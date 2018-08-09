import React from 'react'
import SVG from 'svgjs';
import { TweenMax, Linear } from 'gsap';
import styles from './svgShapes.scss';
import cx from 'classnames';

class Triangle extends React.Component {

  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  componentDidMount() {

    this.createTriangle();

  }

  componentWillUnmount() {

  }

  createTriangle() {

    this.draw = SVG(this.myRef.current).viewbox(0, 0, 100, 100);
    this.group = this.draw.group().viewbox(0, 0, 300, 300).move(-50,-50);

    this.groupClip = this.draw.group().viewbox(0, 0, 100, 100);
    this.clipPolygon = this.groupClip.clip().add(this.groupClip.polygon('0,100 50,15 100,100').fill('#000'));
    this.groupClip.clipWith(this.clipPolygon);

    this.groupClip.add(this.group);

    // CLIP - The same as Mask but doesn't allow lines or opacity levels
    this.clip = this.group.clip();

    let line = this.draw.path('M 0,50 300,48 300,52 z').fill('transparent');
    let yt;

    for (let i = 0; i < 200; i++) {
      yt = 3 * i;
      this.clip.add(line.clone().move(0, yt).fill('#000'));
    }

    this.groupB = this.group.clone();
    this.groupD = this.group.clone();
    this.groupE = this.group.clone();
    let rect = this.group.rect(200,200).fill('rgba(244, 29, 210, 0.7)');
    rect.clipWith(this.clip);

    TweenMax.to(this.group.node, 10, {rotation:'360_cw', transformOrigin:"center center", repeat:-1, ease: Linear.easeNone  });

    this.groupB.add(rect.clone().fill('rgba(87, 255, 241, 0.7)').rotate(180));
    TweenMax.to(this.groupB.node, 10, {rotation:'360_ccw', transformOrigin:"center center", repeat:-1, ease: Linear.easeNone });

    this.groupD.add(rect.clone().fill('rgba(254, 217, 4, 0.7)').rotate(180));
    TweenMax.to(this.groupD.node , 10, {rotation:'360_cw', transformOrigin:"center center", repeat:-1, ease: Linear.easeNone });

  }

  render() {
    return (
      <div ref={this.myRef} className={cx(styles.svgOuter, styles.triangle)}  />
    );
  }
}


export default Triangle


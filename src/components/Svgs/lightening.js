import React from 'react'
import SVG from 'svgjs';
import { TweenMax, Linear } from 'gsap';
import { map } from 'lodash/fp';

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
    let dotsColor = '#ffc107';


    this.rowArray = [];
    this.circleArray = [];

    let MainDraw = SVG(this.myRef.current).viewbox(0, 0, 100, 100).attr({'preserveAspectRatio': 'xMidYMid meet'});

    let DotsGroup = MainDraw.group();

    this.cirlceDim = {x: (this.state.container.x / this.state.columns) , y: (this.state.container.x / this.state.columns)};

    for (let i = 0; i < (this.state.columns * this.state.rows); i++) {
      this.circle = DotsGroup.circle(this.cirlceDim.x - 1.5 , this.cirlceDim.y - 1.5).move((0.75 + (this.cirlceDim.x * col)),(0.75 + (this.cirlceDim.y * row))).fill(dotsColor);
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

    // let DotsGroup_2 = DotsGroup.clone();
    //
    // map((d)=>{
    //   d.setAttribute('fill','rgba(60, 5, 55, 0.82)');
    // },((DotsGroup.node).querySelectorAll('circle')));
    //
    // let CircleMask = DotsGroup.circle(90,90).fill('#fff')
    // DotsGroup.maskWith(CircleMask);

    let Lightening = DotsGroup.polygon('52.711,0 84.521,0 66.561,30.078 84.521,30.078 20.47,99.538 40.81,51.716 28.043,51.716').fill('#fff');
    DotsGroup.maskWith(Lightening.scale(0.9));

    let DotsGroupGroup = MainDraw.group();
    DotsGroupGroup.add(Lightening.clone().fill('transparent').stroke({'width': 0.75, 'color': dotsColor }));



    // Lightening Outline
     TweenMax.fromTo(DotsGroupGroup.node, 0.5, {scale:1, transformOrigin:"center center", ease: Linear.sineInOut }, {scale:1.03, transformOrigin:"center center", ease: Linear.sineInOut }).repeat(-1).yoyo(true);

    TweenMax.fromTo(DotsGroupGroup.node, 1, {rotation:'-0.7_ccw', transformOrigin:"center center", repeat:-1, ease: Linear.easeNone },{rotation:'0.5_cw', transformOrigin:"center center", repeat:-1, ease: Linear.easeNone }).yoyo(true);

    TweenMax.fromTo(DotsGroupGroup.node, 0.01, {y:'0.5', transformOrigin:"center center", repeat:-1, ease: Linear.easeNone },{y:'-0.5', transformOrigin:"center center", repeat:-1, ease: Linear.easeNone }).yoyo(true);

    // Background Dots
    // TweenMax.fromTo(DotsGroup.node, 0.5, {scale:1, transformOrigin:"center center", ease: Linear.sineInOut }, {scale:1.01, transformOrigin:"center center", ease: Linear.sineInOut }).repeat(-1).yoyo(true);
    // TweenMax.fromTo(DotsGroup.node, 1, {rotation:'-0.7_ccw', transformOrigin:"center center", repeat:-1, ease: Linear.easeNone },{rotation:'0.5_cw', transformOrigin:"center center", repeat:-1, ease: Linear.easeNone }).yoyo(true);
    // TweenMax.fromTo(DotsGroup.node, 0.01, {y:'0.3', transformOrigin:"center center", repeat:-1, ease: Linear.easeNone },{y:'-0.3', transformOrigin:"center center", repeat:-1, ease: Linear.easeNone }).yoyo(true);
    // TweenMax.fromTo(DotsGroup.node, 0.5, {scale:1, transformOrigin:"center center", ease: Linear.sineInOut }, {scale:1.04, transformOrigin:"90% center", ease: Linear.sineInOut }).repeat(-1).yoyo(true);

    // Lightening Dots
    TweenMax.fromTo(DotsGroup.node, 1, {scale:1, transformOrigin:"center center", ease: Linear.sineInOut }, {scale:1.03, transformOrigin:"center center", ease: Linear.sineInOut }).repeat(-1).yoyo(true);
    TweenMax.fromTo(DotsGroup.node, 0.2, {rotation:'0.5_cw', transformOrigin:"center center", repeat:-1, ease: Linear.easeNone },{rotation:'-0.5_ccw', transformOrigin:"center center", repeat:-1, ease: Linear.easeNone }).yoyo(true);
    TweenMax.fromTo(DotsGroup.node,  0.1, {y:'-0.5', transformOrigin:"center center", repeat:-1, ease: Linear.easeNone },{y:'0.5', transformOrigin:"center center", repeat:-1, ease: Linear.easeNone }).yoyo(true);

    
  }

  render() {
    return (
      <div ref={this.myRef} className={this.props.className} />
    );
  }

}


export default Dotty


import React from 'react'
import SVG from 'svgjs';
import styles from './svgShapes.scss';
import cx from 'classnames';

class Hypno extends React.Component {

  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      container: {x: 50, y: 50},
      groupScale: 1,
      strokeWidth: 6,
      circleMax: 7,
      endScale: 5,
      color: '245, 242, 15',
      opacity: 1,
      animateOnHover: false,
    }
  }

  componentDidMount() {
    this.setUpHypno();
  }

  componentWillUnmount() {

  }

  setUpHypno() {

    let el;
    let startScale;

    this.draw = SVG(this.myRef.current).viewbox(0, 0, 100, 100).attr({'preserveAspectRatio': 'xMidYMid meet'});
    this.group = this.draw.group().move(this.state.container.x, this.state.container.x).scale(this.state.groupScale);

    for (let i = 0; i < this.state.circleMax; i++) {
      startScale = 1 - ((1 / this.state.circleMax) * i);
      el = this.addCircle(startScale);
      this.setUpAnimation(el, startScale);
    }

  }

  addCircle = function(scale) {
    let el =  this.group.circle(100 - (this.state.strokeWidth), 100 - (this.state.strokeWidth) )
      .move(this.state.strokeWidth/2, this.state.strokeWidth/2)
      .fill('transparent')
      .stroke({width:this.state.strokeWidth, color:'rgba('+this.state.color+','+ this.state.opacity+')'})
      .center(0, 0)
      .scale(scale)
      .addClass('hypno-circle');
    return el;
  };

  setUpAnimation = function(el, startScale) {

    let self = this;

    el.animate(10000, '-').transform({scale: (self.state.endScale - startScale )}).during(function(pos, morph, eased, situation) {

      let el;
      let startScale;
      let last;

      last = self.group.last();

      if (last.transform('scaleX') > (1/self.state.circleMax) + 0.0001  && !last.data('edge') ) {
        this.data('edge',true);
        startScale = this.parent().last().transform('scaleX') - (1/self.state.circleMax);
        el = self.addCircle(startScale);
        self.setUpAnimation(el, startScale);
      }
      else if (this.transform('scaleX') >= (self.state.endScale - 2)) {
        this.stop();
      }

    });
  };

  render() {
    return (
      <div ref={this.myRef} className={cx(styles.svgOuter, styles.hypno)}  />
    );
  }
}

export default Hypno


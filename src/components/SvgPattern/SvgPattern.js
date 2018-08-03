import React, { Component } from 'react';
import SVG from 'svgjs';
import cx from 'classnames'
import styles from './svgPattern.scss';

import Skull from './media/svgTileSkull.svg'
import Lightening from './media/svgTileLightening.svg'
import Globe from './media/svgTileGlobe.svg'
import Peace from './media/svgTilePeace.svg'


class SvgPattern extends Component {

  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.svgArray = [Skull, Lightening, Globe, Peace];
    this.colorArray = ['#ff00ea', 'blue', 'yellow', '#ffffff'];
    this.state={ count: 0}
  }

  componentDidMount() {
    this.createPattern();
  }

  createPattern() {

    this.draw = SVG(this.myRef.current).viewbox(0, 0, 100, 100);
    let rect = this.draw.rect(100,100);

    this.pattern = this.draw.pattern(12.5, 12.5, function(add) {
      // the viewbox size should match the imported svg height and width.
      add.svg(this.svgArray[this.state.count]).viewbox(0, 0, 100, 100).attr({fill: this.colorArray[this.state.count] });

    }.bind(this))

    rect.attr({ fill: this.pattern });

  }

  updatePattern() {
     this.pattern.update(function(add) {
      add.svg(this.svgArray[this.state.count]).attr({fill: this.colorArray[this.state.count] });;
    }.bind(this))
  }

  shouldComponentUpdate(nextProps, nextState) {
    return ( (nextState.count === this.state.count && nextProps.offCanvasMenuAnimating === this.props.offCanvasMenuAnimating) && !(nextProps.offCanvasMenuAnimating) );
  }

  componentWillUpdate(nextProps, nextState){
    this.setState((prevState, props) => {
      return {
        count: prevState.count + 1 >= this.svgArray.length ?  0 : prevState.count + 1
      };
    });
    this.updatePattern();
  }

  render() {
    return (
      <div ref={this.myRef} className={cx(styles.svgPattern)}/>
    )
  }
}

export default SvgPattern;

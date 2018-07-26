import React, { Component } from 'react';
import fp, { get, getOr, times } from 'lodash/fp';
import {StyleRoot} from 'radium';

import OneQuarter from './OneQuarterComp';
import Overlay from './Overlay';

import styles from './quarterPageStyles';
import bgImg from './media/circuit-tran.gif';

import panelImageA from './media/panel-1-1.gif'
import panelImageB from './media/panel-2-1.gif'
import panelImageC from './media/panel-3-1.gif'
import panelImageD from './media/panel-4-1.gif'

import overlayImageA from './media/overlay-1-1.gif'
import overlayImageB from './media/overlay-2-1.gif'
import overlayImageC from './media/overlay-3-1.gif'
import overlayImageD from './media/overlay-4-1.gif'

import SvgLayerB from './PureHypnoComp'
import SvgLayerC from './PureDottyComp'

import VideoBackground from '../Background/video';
import bgSrc from '../../media/backgrounds/video/Comp.mp4'

class QuarterPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hoverState: false
    }

    this.hoverState = {
      bgColor: ['rgba(0, 0, 0, 0.5)', 'rgba(0, 0, 0, 0.25)', 'rgba(0, 0, 0, 0.5)', 'rgba(0, 0, 0, 0.25)'],
      bgColorHover: ['rgba(174, 249, 1, 0.69)', 'rgba(255, 179, 0, 0.54)', 'rgba(165, 12, 12, 0.74)', 'rgba(91, 118, 255, 0.58)'],
      panel: [panelImageA, panelImageB, panelImageC, panelImageD],
      overlay: [overlayImageA, overlayImageB, overlayImageC, overlayImageD],
      svgLayer: [null, null, SvgLayerC, null],
    }

  }
  shouldComponentUpdate(nextProps, nextState) {
    return (this.state.hoverIndex !== nextState.hoverIndex );
  }

/*
  render() {
    return <SvgLayerC />
  }
*/


  render() {

    const stylesBackgroundImage = () => {
      return {
        backgroundImage: `url(${bgImg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        zIndex: 2,
      }
    };

    const onChildHover = (i) =>{
      this.setState({hoverIndex: i})
    };

    return (
      <div style={{position:'relative'}}>
        <VideoBackground bgSrc={bgSrc} />
        <div
          style={{
            ...styles.page.base,
            ...stylesBackgroundImage()
          }}
        >
          {fp.times(function(index) {
            return <OneQuarter key={index}
                               index={index}
                               hoverIndex={this.state.hoverIndex}
                               bgColor={this.hoverState.bgColor[index]}
                               bgColorHover={this.hoverState.bgColorHover[index]}
                               onChange={onChildHover}
                               svgLayer={this.state.hoverIndex === index ? getOr('', index, this.hoverState.svgLayer) : null }
                               bgImg={this.state.hoverIndex === index ? getOr('', index, this.hoverState.panel) : '' }/>
          }.bind(this),4)}
        </div>
        <Overlay hoverindex={this.state.hoverIndex} bgImg={getOr('', this.state.hoverIndex, this.hoverState.overlay) }/>
      </div>
    )
  }
}

export default QuarterPage;

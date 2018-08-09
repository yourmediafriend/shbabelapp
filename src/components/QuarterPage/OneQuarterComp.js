import React, { Component } from 'react';
import Animate from 'react-move/Animate';
import { easeExpInOut } from 'd3-ease';
import styles from './quarterPageStyles';
import Radium from "radium";

class Qpanel extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  shouldComponentUpdate(nextProps, nextState) {

    return (
      (Radium.getState(this.state, 'main', ':hover') !== Radium.getState(nextState, 'main', ':hover'))
       ||
      (this.props.hoverIndex !== nextProps.hoverIndex)
    );
  }

  componentDidUpdate(prevProps, prevState){

    if ( Radium.getState(this.state, 'main', ':hover')) {
      this.props.onChange(this.props.index);
    }
    else if (this.props.hoverIndex === this.props.index) {
      this.props.onChange('');
    }
  }

  render() {

    const stylesBackgroundColorHover = props => {
      return Radium.getState(this.state, 'main', ':hover') ? {backgroundColor:props.bgColorHover}: {backgroundColor:props.bgColor};
    };

    const stylesBackgroundImage = props => {
      return props.bgImg ? {backgroundImage: `url(${props.bgImg})`} : {backgroundImage:'none'};
    };

    const hasSVG = props => {
      if (props.svgLayer) {
        return (
          <div
          style={{
            ...styles.panel.layer.base,
            ...stylesBackgroundImage(this.props),
          }}>
            <props.svgLayer style={{...styles.panel.layer.svg}}/>
          </div>
        );
      }
      return null;
    };

    const hasBG = props => {
      if (props.bgImg) {
        return <div
          style={{
            ...styles.panel.layer.base,
            ...stylesBackgroundImage(this.props),
          }}
        />;
      }
      return null;
    };

    return (
      <div
        style={{
          ...styles.panel.backpanel,
          ...stylesBackgroundColorHover(this.props)
        }}
      >
        { hasSVG(this.props) }
        { hasBG(this.props) }
      </div>
    )
  }
}

Qpanel = Radium(Qpanel);

class OneQuarter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
  }

  componentDidRender() {
    window.requestAnimationFrame(function() {
      this.setState({isOpen: true});
    }.bind(this));
  }

  componentDidMount() {
    this.componentDidRender();
  }

  render() {

    return (
      <Animate
        start={() => ({
          panel: {
            transformYDown: -105,
            transformYUp: 105,
          },
        })}
        update={() => ({
          panel: {
            transformYDown: [this.state.isOpen ? 0 : -105],
            transformYUp: [this.state.isOpen ? 0 : 105],
          },
          timing: { duration: 2000, ease: easeExpInOut },
          events: {
            start() {

            },
            end() {

            },
          },
        })}
      >
        {(state) => {

          const stylesAnimate = (state) => {
            const { panel } = state;
            return {
              panel: {
                transform: `translate3d(0, ${ this.props.index%2 === 0 ? panel.transformYDown : panel.transformYUp }%, 0)`,
              },
            }
          };

          return (
            <div
              style={{
                ...styles.panel.quarter,
                ...stylesAnimate(state).panel,
              }}
            >
              <Qpanel index={this.props.index} onChange={this.props.onChange} bgColor={this.props.bgColor}  bgColorHover={this.props.bgColorHover} hoverIndex={this.props.hoverIndex} bgImg={this.props.bgImg} svgLayer={this.props.svgLayer}/>
            </div>
          );
        }}
      </Animate>
    )
  }
}

export default OneQuarter;

import React, { Component } from 'react';
import Animate from 'react-move/Animate';
import { easeExpInOut } from 'd3-ease';
import stylesjs from './quarterPageStyles';
import styles from './quarterPage.scss';


class Qpanel extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  shouldComponentUpdate(nextProps, nextState) {

    return true
  }

  componentDidUpdate(prevProps, prevState){

  }

  render() {

    const stylesjsBackgroundImage = props => {
      return props.bgImg ? {backgroundImage: `url(${props.bgImg})`} : {backgroundImage:'none'};
    };

    const hasSVG = props => {
      if (props.svgLayer) {
        return (
          <div
          style={{
            ...stylesjs.panel.layer.base,
            ...stylesjsBackgroundImage(this.props),
          }}>
            <props.svgLayer style={{...stylesjs.panel.layer.svg}}/>
          </div>
        );
      }
      return null;
    };

    const hasBG = props => {
      if (props.bgImg) {
        return <div
          style={{
            ...stylesjs.panel.layer.base,
            ...stylesjsBackgroundImage(this.props),
          }}
        />;
      }
      return null;
    };

    return (
      <div
        style={{
          ...stylesjs.panel.backpanel,
        }}
      >
        { hasSVG(this.props) }
        { hasBG(this.props) }
      </div>
    )
  }
}


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

          const stylesjsAnimate = (state) => {
            const { panel } = state;
            return {
              panel: {
                transform: `translate3d(0, ${ this.props.index%2 === 0 ? panel.transformYDown : panel.transformYUp }%, 0)`,
              },
            }
          };

          return (
            <div
              className={styles.quarter}
              style={{
                ...stylesjs.panel.quarter,
                ...stylesjsAnimate(state).panel,
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

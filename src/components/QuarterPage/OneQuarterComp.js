import React, { Component } from 'react';
import Animate from 'react-move/Animate';
import { easeExpInOut } from 'd3-ease';
import styles from './quarterPage.scss';
import cx from 'classnames';
import ReactHoverObserver from '../ReactHoverObserver';

class Qpanel extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    const stylesBackgroundImage = props => {
      return props.bgImg ? {backgroundImage: `url(${props.bgImg})`} : {backgroundImage:'none'};
    };

    const hasBG = props => {
      if (props.bgImg) {
        return <div
          className={cx(styles.layer) }
          style={{
            ...stylesBackgroundImage(this.props),
          }}
        />;
      }
      return null;
    };

    return (
      <div className={cx(styles.backpanel)} >
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

          const stylesAnimate = (state) => {
            const { panel } = state;
            return { transform: `translate3d(0, ${ this.props.index%2 === 0 ? panel.transformYDown : panel.transformYUp }%, 0)`}
          };

          return (
            <div
              className={styles.quarter}
              style={{
                ...stylesAnimate(state),
              }}
            >
              <ReactHoverObserver
                hoverDelayInMs={this.props.hoverDelay ? this.props.hoverDelay : 0}
                hoverOffDelayInMs={this.props.hoverOffDelay ? this.props.hoverOffDelay : 0}
                className={cx(styles.reactHoverObserver)}
              >
                {({ isHovering }) => {


                //  console.log('isHovering', isHovering, this.props.index );
                  return (
                    <Qpanel index={this.props.index}
                            isHovering={isHovering}
                            onChange={ this.props.onChange.bind(this, isHovering, this.props.index )()}
                            bgColor={this.props.bgColor}
                            bgColorHover={this.props.bgColorHover}
                            hoverIndex={this.props.hoverIndex}
                            bgImg={isHovering ? this.props.bgImg: ''}
                            svgLayer={this.props.svgLayer}/>
                  )
                }}
              </ReactHoverObserver>
            </div>
          );
        }}
      </Animate>

    )
  }
}

export default OneQuarter;

import React, { Component } from 'react';
import DummyText from '../DummyText';
import { get } from 'lodash/fp';
import styles from './actionBannerStyles';

import {Transition, TransitionGroup } from 'react-transition-group';
import style from "../Background/theme/backgroundStyles";

//console.log('Transition',Transition);
//console.log('TransitionGroup',TransitionGroup);

class BannerContent extends Component {

  constructor(props) {
    super(props);
    this.state = {opacity: 0};
  }

  render() {

    const duration = 1000;

    const defaultStyle = {
      transition: `opacity ${duration}ms ease-in-out, transform 1000ms ease-in-out`,
    };

    const transitionStyles = {
      entered:  {
        opacity: 1,
        transform: 'translateY(-50%)'
      },
      exited: {
        opacity: 0,
        transform: 'translateY(0)'
      }
    };

    return (
      <div>
          <Transition
            in={this.props.sceneActive}
            timeout={duration}
            onEnter={() => {
              this.setState({
                opacity: 1
              })
            }}
            onExit={() => {
              this.setState({
                opacity: 0
              })
            }}
            addEndListener={(node, done) => console.log('addEndListener')}
            >
            {(state) => {
              return (
                <div className="wrapper" style={{...styles.actionBanner.banner, ...defaultStyle, ...{opacity:`${this.state.opacity}`}}}>
                  <header>
                    <h1>SIMPLIFY</h1>
                  </header>
                  <section>
                    <p>Simplify your content to a MINIMUM.</p>
                  </section>
                </div>
              )
            }}
          </Transition>
      </div>
    )
  }
}

export default BannerContent;


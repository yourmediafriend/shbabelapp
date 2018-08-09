import React, { Component } from 'react';
import styles from './actionBannerStyles';
import { Transition } from 'react-transition-group';

class BannerContent extends Component {

  constructor(props) {
    super(props);
    this.state = {opacity: 0};
  }

  render() {

    const defaultStyle = {
      opacity: 0,
      transform: 'translateY(20%)',
    };

    const transitionStyles = {
      entered:  {
        transition: `opacity 500ms ease-out, transform 200ms ease-out`,
        opacity: 1,
        transform: 'translateY(0)',
      },
      exiting: {
        opacity: 0,
        transform: 'translateY(25%)',
        transition: `opacity 150ms ease-out, transform 100ms ease-out`,
      }
    };

    return (
      <div>
          <Transition
            in={this.props.sceneActive}
            timeout={{
              enter: 500,
              exit: 150,
            }}
          >
            {(state) => {
              return (
                <div className="wrapper" style={{...styles.actionBanner.banner, ...defaultStyle, ...transitionStyles[state]      }}>
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


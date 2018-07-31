import React, { Component } from 'react';
import styles from './stickyHeaderStyles';
import Animate from 'react-move/Animate';
import { easeExp, easeExpInOut, easePolyOut, easeQuad, easeCubicInOut, easeCircleOut } from 'd3-ease';
import Radium from "radium";
import scrollMagicEnhanced from "./scrollMagicEnhanced";
import MegaMenu from '../MegaMenu';
import IconNav from '../IconNav';


class StickyHeader extends Component {

  constructor(props) {
    super(props);
    this.state = {compact: false};
    this.myRef = React.createRef();
  };

  toggleCompactHeader = () => {
    this.setState({compact: !this.state.compact});
  };

  render() {
    const { style } = this.props;

    let baseHeight = parseInt(styles.header.base.height, 10);
    let compactHeight = parseInt(styles.header.compact.height, 10);

    return (
      <Animate
        start={() => ({
          header: {
            height: baseHeight,
          },
        })}
        update={() => ({
          header: {
            height: [!this.state.compact ? baseHeight : compactHeight],
          },
          timing: { duration: 250, ease: easeCubicInOut },
          events: {
            start() {

            },
            end() {
              // When Animation Ends Make sure the sticky Padding is reset
            },
          },
        })}
      >
        {(state) => {

         const compStyles = (state) => {
            const { header } = state;
            return {
              header: {
                height: `${header.height}px`,
              },
            }
         };

         return (
            <div >
              <div className="padding" style={{paddingTop: compStyles(state).header.height}} />
              <div style={{...styles.header.base, ...style, ...compStyles(state).header}}>
                <MegaMenu />
                <IconNav />
              </div>
            </div>
         );
        }}
      </Animate>
    )
  }
}

export default scrollMagicEnhanced(StickyHeader);

import React, { Component } from 'react';
import stylesJs from './stickyHeaderStyles';
import Animate from 'react-move/Animate';
import { easeExp, easeExpInOut, easePolyOut, easeQuad, easeCubicInOut, easeCircleOut } from 'd3-ease';

import scrollMagicEnhanced from "./scrollMagicEnhanced";
import MegaMenu from '../MegaMenu';
import IconNav from '../IconNav';


import styles from './stickyHeader.scss';
import cx from "classnames";


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

    let baseHeight = parseInt(stylesJs.header.base.height, 10);
    let compactHeight = parseInt(stylesJs.header.compact.height, 10);

    return (
      <Animate
        start={() => ({
          styles,
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
            <div className={cx(state.styles.stickyHeader, state.styles.base, state.styles.isSticky)} style={{...compStyles(state).header}}>
              <MegaMenu />
              <IconNav />
            </div>
          );
        }}
      </Animate>
    )
  }
}

//export default StickyHeader;
export default scrollMagicEnhanced(StickyHeader);

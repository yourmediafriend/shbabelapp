import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import {bindActionCreators} from "redux";
import stylesJs from './stickyHeaderStyles';
import Animate from 'react-move/Animate';
import { easeCubicInOut } from 'd3-ease';
import scrollMagicEnhanced from "./scrollMagicEnhanced";
import MegaMenu from '../MegaMenu';
import IconNav from '../IconNav';
import styles from './header.scss';
import cx from "classnames";
import {get} from "lodash/fp";


class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {compact: false};
    this.myRef = React.createRef();
  };

  toggleCompactHeader = () => {
    this.setState({compact: !this.state.compact});
  };

  render() {
    const { iconNavPosition } = this.props;

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

              <IconNav  className={'iconNavSide'}
                        menuItems={{
                          home: true,
                          search: true,
                          account: true,
                          contact: true,
                          cart: true
                        }} />


              {iconNavPosition === 'top' ?
             null   : null}
            </div>
          );
        }}
      </Animate>
    )
  }
}

Header.propTypes = {
  iconNavPosition: PropTypes.string,
};

export const mapStateToProps = (state) => {
  return {
    iconNavPosition: get('appModule.iconNavPosition', state),
  }
};

export const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {},
    dispatch
  );


export default connect(mapStateToProps, mapDispatchToProps)(scrollMagicEnhanced(Header));


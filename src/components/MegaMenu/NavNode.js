import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {bindActionCreators} from "redux";
import ReactHoverObserver from '../ReactHoverObserver';
import NodeHeader from './NodeHeader';
import NodeMegaMenu from './Megamenu';

import { flow, get, has, isMatch, includes, map } from 'lodash/fp'

import { megaMenuOpen, megaMenuClose } from '../../modules/MegaMenu';

import { NavItem } from 'reactstrap';
import styles from './megaMenu.scss'
import cx from "classnames";

class NavNode extends React.Component {

  isActiveBranch(obj, currentUrl) {

    const mapChildren=(n) => this.isActiveBranch(n, currentUrl);

    if (isMatch({'url':currentUrl},obj) ) {
      return true;
    }
    else if (has('children', obj)) {
      return  flow(
        get('children'),
        map(mapChildren),
        includes(true)
      )(obj)
    }
    return false;
  }

  render() {
    return (
      <NavItem>
        <ReactHoverObserver
          hoverDelayInMs={250}
          hoverOffDelayInMs={250}
          className={cx(styles.reactHoverObserver)}
        >
          {({ isHovering }) => (
              <div>
                {this.renderHeaderNav(isHovering)}
                {this.renderDropdown(isHovering)}
              </div>
            )}
        </ReactHoverObserver>
      </NavItem>
    )
  }

  renderHeaderNav(isHovering) {
    const {node, level, megaMenuOpen, megaMenuClose} = this.props;
    //it stores its own node and when asked to toggle. adds it to drawer
    // remove click and replace with Radium Mouse over

    isHovering ? megaMenuOpen() : megaMenuClose();
    return (
      <NodeHeader level={level}
                  node={Object.assign({}, node)}
                  isHovering={isHovering} />
    );
  }

  renderDropdown( isHovering ) {

    const { node, level } = this.props;

    return (
        <NodeMegaMenu   level={level + 1}
                        columns={5}
                        node={Object.assign({}, node)}
                        isHovering = {isHovering}
                        />
    );
  }
}

NavNode.propTypes = {
    node: PropTypes.object.isRequired,
    isToggled:  PropTypes.bool,
    onToggle: PropTypes.func,
};

const mapStateToProps = (state) => {
  return { };
};

export const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      megaMenuOpen,
      megaMenuClose
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(NavNode);

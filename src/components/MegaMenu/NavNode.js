'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {bindActionCreators} from "redux";

import ReactHoverObserver from '../ReactHoverObserver';

import NodeHeader from './NodeHeader';
import NodeMegaMenu from './Megamenu';

import { flow, get, has, isMatch, includes, map, getOr, takeRight, dropRight, last, first } from 'lodash/fp'

import { megaMenuOpen, megaMenuClose } from '../../modules/MegaMenu';


class NavNode extends React.Component {

  constructor() {
    super();
  }

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
    const { style, node } = this.props;

    return (
      <ReactHoverObserver
        hoverDelayInMs={250}
        hoverOffDelayInMs={250}
        styles={{height:'100%', display:'flex'}}
      >
        {({ isHovering }) => (
          <li>
              {this.renderHeaderNav(isHovering)}
              {this.renderDropdown(isHovering)}
          </li>
          )}
      </ReactHoverObserver>
    )
  }

  renderHeaderNav(isHovering) {
    const {node, style, level, currentUrl, onToggle, megaMenuOpen, megaMenuClose} = this.props;
    //it stores its own node and when asked to toggle. adds it to drawer
    // remove click and replace with Radium Mouse over

    isHovering ? megaMenuOpen() : megaMenuClose();

    return (
      <NodeHeader level={level}
                  node={Object.assign({}, node)}
                  style={style}
                  isHovering={isHovering} />
    );
  }

  renderDropdown( isHovering ) {

    const { node, style, level } = this.props;

    return (
        <NodeMegaMenu   level={level + 1}
                        columns={3}
                        node={Object.assign({}, node)}
                        isHovering = {isHovering}
                        />
    );
  }
}

NavNode.propTypes = {
    style: PropTypes.object.isRequired,
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

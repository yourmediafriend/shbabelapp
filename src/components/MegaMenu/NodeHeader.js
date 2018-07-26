'use strict';

import React from 'react';
import PropTypes from 'prop-types';

class NodeHeader extends React.Component {
  render() {
    const {node, style, isHovering} = this.props;

    const compStyle = () => {
        return isHovering ? {...style.nav.link.hover} : '';
    }

    return (
      <a href="#" style={{...style.nav.link, ...compStyle() }}>
        <span>
          {node.name}
        </span>
      </a>
    );
  }
}

NodeHeader.propTypes = {
    style: PropTypes.object.isRequired,
    node: PropTypes.object.isRequired,
};

export default NodeHeader;

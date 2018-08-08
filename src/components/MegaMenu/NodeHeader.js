import React from 'react';
import PropTypes from 'prop-types';
import styles from './megaMenu.scss'
import cx from "classnames";

class NodeHeader extends React.Component {
  render() {
    const {node, isHovering} = this.props;
    return (
      <a href="" className={cx(styles.link, isHovering ? styles.hover : '' )}>
        <span>
          {node.name}
        </span>
      </a>
    );
  }
}

NodeHeader.propTypes = {
    node: PropTypes.object.isRequired,
};

export default NodeHeader;

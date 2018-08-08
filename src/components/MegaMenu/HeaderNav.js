import React from 'react';
import PropTypes from 'prop-types';
import NavNode from './NavNode';
import styles from './megaMenu.scss'
import { Nav } from 'reactstrap';
import cx from "classnames";

class HeaderNav extends React.Component {

  render() {
    const {data: propsData, onToggle, level, currentUrl } = this.props;
    let data = propsData;

    // Support Multiple Root Nodes. Its not formally a tree, but its a use-case.
    if (!Array.isArray(data)) {
        data = [data];
    }

    return (
      <Nav className={cx(styles.navList)}>
        {data.map((node, index) =>
          <NavNode  key={node.id || index}
                    level={level}
                    node={node}
                    onToggle={onToggle}
                    currentUrl={currentUrl}
          />
        )}
      </Nav>
    );
  }
}

HeaderNav.propTypes = {
    style: PropTypes.object,
    data: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array
    ]).isRequired,
    onToggle: PropTypes.func,
    level: PropTypes.number,
    currentUrl: PropTypes.string,
};

HeaderNav.defaultProps = {
    level: 0,
};

export default HeaderNav;

import React from 'react';
import PropTypes from 'prop-types';
import NavNode from './NavNode';
import Radium from 'radium';

class HeaderNav extends React.Component {

  render() {
    const {data: propsData, onToggle, style, level, currentUrl } = this.props;
    let data = propsData;

    // Support Multiple Root Nodes. Its not formally a tree, but its a use-case.
    if (!Array.isArray(data)) {
        data = [data];
    }

    return (
      <ul style={style.nav.list}>
        {data.map((node, index) =>
          <NavNode  key={node.id || index}
                    level={level}
                    node={node}
                    onToggle={onToggle}
                    style={style}
                    currentUrl={currentUrl}
          />
        )}
      </ul>
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

export default Radium(HeaderNav);

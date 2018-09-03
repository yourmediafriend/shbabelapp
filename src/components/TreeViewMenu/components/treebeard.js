import React from 'react';
import PropTypes from 'prop-types';
import TreeNode from './node';
import defaultDecorators from './decorators';
import defaultTheme from '../themes/default';
import defaultAnimations from '../themes/animations';

class TreeBeard extends React.Component {

  render() {

    const {animations, decorators, data: propsData, onToggle, style, level, currentUrl } = this.props;
    let data = propsData;

// Support Multiple Root Nodes. Its not formally a tree, but its a use-case.
    if (!Array.isArray(data)) {
        //data = [data];
      data = Object.assign([], data)
    }

    return (
        <ul style={style.tree.base}>
          {data.map((node, index) => {
            return (
              <TreeNode animations={animations}
                        decorators={decorators}
                        key={node.id || index}
                        level={level}
                        node={Object.assign({}, node)}
                        onToggle={onToggle}
                        style={style.tree.node}
                        currentUrl={currentUrl}
              />
            )}
          )}
        </ul>
        );
    }
}

TreeBeard.propTypes = {
    style: PropTypes.object,
    data: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array
    ]).isRequired,
    animations: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.bool
    ]),
    onToggle: PropTypes.func,
    decorators: PropTypes.object,
    level: PropTypes.number,
    currentUrl: PropTypes.string,
};

TreeBeard.defaultProps = {
    style: defaultTheme,
    animations: defaultAnimations,
    decorators: defaultDecorators,
    level: 0,
};

export default TreeBeard;

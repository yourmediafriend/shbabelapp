import React from 'react';
import PropTypes from 'prop-types';

class NodeHeader extends React.Component {

    render() {
        const {animations, decorators, node, onClick, style, level, currentUrl, isActiveBranch} = this.props;
        const {active, children} = node;
        const terminal = !children;
        const container = [style.link, active ? style.activeLink : null];
        const headerStyles = Object.assign({container}, style);

        return (
            <decorators.Container animations={animations}
                                  decorators={decorators}
                                  node={node}
                                  level={level}
                                  onClick={onClick}
                                  style={headerStyles}
                                  terminal={terminal}
                                  currentUrl={currentUrl}
                                  isActiveBranch={isActiveBranch} />
        );
    }
}

NodeHeader.propTypes = {
    style: PropTypes.object.isRequired,
    decorators: PropTypes.object.isRequired,
    animations: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.bool
    ]).isRequired,
    node: PropTypes.object.isRequired,
    onClick: PropTypes.func,
    currentUrl: PropTypes.string,
};

export default NodeHeader;

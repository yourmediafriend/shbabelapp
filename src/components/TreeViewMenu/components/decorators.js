'use strict';

import React from 'react';
import PropTypes from 'prop-types';

const Loading = ({style}) => {
    return <div style={style}>loading...</div>;
};

Loading.propTypes = {
    style: PropTypes.object
};

const Toggle = ({style}) => {
    const {height, width} = style;
    const midHeight = height * 0.5;
    const points = `0,0 0,${height} ${width},${midHeight}`;

    return (
        <span style={style.base}>
            <div style={style.wrapper}>
                <svg height={height} width={width}  style={style.svg}  >
                    <polygon points={points}
                             style={style.arrow}/>
                </svg>
            </div>
        </span>
    );
};
Toggle.propTypes = {
    style: PropTypes.object
};

const Header = ({level, node, style}) => {
    return (
        <div style={style.base}>
            <div style={style.title}>
              {node.name}
            </div>
        </div>
    );
};
Header.propTypes = {
    style: PropTypes.object,
    node: PropTypes.object.isRequired,
    level: PropTypes.number,
};


class Container extends React.Component {
    render() {
        const {style, decorators, terminal, onClick, node, level} = this.props;

        return (
            <div onClick={onClick}
                 ref={ref => this.clickableRef = ref}
                 style={style.container}>
                {!terminal ? this.renderToggle() : null}

                <decorators.Header node={node}
                                   level={level}
                                   style={style.header}/>
            </div>
        );
    }

    renderToggle() {
        const {animations} = this.props;

        if (!animations) {
            return this.renderToggleDecorator();
        }

        return (
            <span>
                {this.renderToggleDecorator()}
            </span>
        );
    }

    renderToggleDecorator() {
        const {style, decorators} = this.props;

        return <decorators.Toggle style={style.toggle}/>;
    }
}
Container.propTypes = {
    style: PropTypes.object.isRequired,
    decorators: PropTypes.object.isRequired,
    terminal: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    animations: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.bool
    ]).isRequired,
    node: PropTypes.object.isRequired
};

export default {
    Loading,
    Toggle,
    Header,
    Container
};

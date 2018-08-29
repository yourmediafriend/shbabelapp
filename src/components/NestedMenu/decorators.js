import React from 'react';
import PropTypes from 'prop-types';
import {VelocityComponent} from 'velocity-react';

import { Link } from 'react-router-dom';

import { NavLink } from 'reactstrap'
import Icon from '../Icons';
import styles from './NestedMenu.scss';

const Loading = ({style}) => {
    return <div style={style}>loading...</div>;
};

Loading.propTypes = {
    style: PropTypes.object
};

const Toggle = ({style}) => {
    return (
        <span style={style.base}>
            <div style={style.wrapper}>
              <Icon icon="menuCevron" color='#ccc' size={12} />
            </div>
        </span>
    );
};

Toggle.propTypes = {
    style: PropTypes.object
};

const Header = ({level, node, style}) => {
    return (
        <span style={style.base}  className={styles.base}>
            <div style={style.title}>
              {node.name}
            </div>
        </span>
    );
};

Header.propTypes = {
    style: PropTypes.object,
    node: PropTypes.object.isRequired,
    level: PropTypes.number,
};

class Container extends React.Component {

    NavLinkStyles() {

      const {style, node, currentUrl, isActiveBranch} = this.props;

      let linkStyle= style.link;

      if (isActiveBranch && !(node.url===currentUrl)) {
        linkStyle = {...style.link,...style.link.activeBranch}
      }
      else if ((node.url===currentUrl)) {
        linkStyle = {...style.link,...style.link.active}
      }

      return linkStyle;
    }

    render() {
      const {style, decorators, terminal, onClick, node, level } = this.props;

      return (

            <div onClick={!terminal ? onClick : ''}
                     style={this.NavLinkStyles()} >


              {node.url ? <Link to={node.url}>
                          <decorators.Header node={node}
                                 level={level}
                                 style={style.header}/>

                </Link> :  <decorators.Header node={node}
                level={level}
                style={style.header}/> }

                {!terminal ? this.renderToggle() : null}
            </div>
        );
    }

    renderToggle() {
      const {animations} = this.props;

      if (!animations) {
            return this.renderToggleDecorator();
        }
      return (
          <VelocityComponent animation={animations.toggle.animation}
                             duration={animations.toggle.duration}
                             ref={ref => this.velocityRef = ref}>
            {this.renderToggleDecorator()}
          </VelocityComponent>
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

import React from 'react';
import PropTypes from 'prop-types';
import {VelocityComponent} from 'velocity-react';
import { NavLink } from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';
import Icon from '../Icons';
import styles from './NestedMenu.scss';
import cx from 'classnames';


const Loading = ({style}) => {
    return <div style={style}>loading...</div>;
};

Loading.propTypes = {
    style: PropTypes.object
};

const Toggle = ({style}) => {
    return (
      <span className={cx(styles.toggle)}>
        <Icon icon="menu-cevron" />
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
          {node.label}
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
      let linkStyle;
      const { node, currentUrl, isActiveBranch} = this.props;
      if (isActiveBranch && !(node.url.path===currentUrl)) {
        linkStyle = cx(styles.active, styles.activeBranch)
      }
      return linkStyle;
    }

    render() {
      const {style, decorators, terminal, onClick, node, level } = this.props;

      return (
        <div>
          {terminal  ?
            <NavLink to={node.url.path} activeClassName="active" tag={RRNavLink} className={this.NavLinkStyles()}   >
              <decorators.Header node={node} level={level} style={style.header}/>
            </NavLink>
            :
            <div onClick={ onClick } className={cx('nav-link', this.NavLinkStyles())} >
              <decorators.Header node={node} level={level} style={style.header}/>
              { this.renderToggle() }
            </div>
          }
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
      return <decorators.Toggle />;
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

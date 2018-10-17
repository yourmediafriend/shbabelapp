import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import {VelocityComponent} from 'velocity-react';
import { NavLink } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import Icon from '../Icons';
import styles from './nestedMenu.scss';
import cx from 'classnames';
import {get} from "lodash/fp";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {offCanvasMenuClose} from "../../modules/OffCanvasMenu";

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

    state = {
      redirect: false,
    }

    componentDidUpdate () {
      if (this.state.redirect) {
        this.setState({
          redirect: false
        })
      }
     }

    NavLinkStyles() {
      let linkStyle;
      const { node, currentUrl, isActiveBranch} = this.props;
      if (isActiveBranch && !(node.url.path===currentUrl)) {
        linkStyle = cx(styles.active, styles.activeBranch)
      }
      return linkStyle;
    }

    handleOnClick() {
      this.props.offCanvasMenuClose();
      this.setState({ redirect: true });
    }

    render() {
      const {style, decorators, terminal, onClick, node, level } = this.props;

      if (this.state.redirect === true) {
        return <Redirect  push to={`${node.url.path}`} />
      }

      return (
        <div>
          {terminal  ?
              <NavLink href={'#'} onClick={this.handleOnClick.bind(this)} className={this.NavLinkStyles()}   >
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

const mapStateToProps = state => {
  return ({});
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      offCanvasMenuClose,
    },
    dispatch
  );

export default {
    Loading,
    Toggle,
    Header,
    Container: (connect(mapStateToProps, mapDispatchToProps)(Container))
};
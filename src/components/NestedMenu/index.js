import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import {
  attemptToRetrieveMenu,
} from '../../modules/NestedMenu';

import { get } from 'lodash/fp'

import {Treebeard} from '../TreeViewMenu';

import decorators from './decorators';
import animations from './themes/animations';
import theme from './themes/default';

import styles from './NestedMenu.scss';

class NestedMenu extends Component {

  constructor() {
    super();
    this.state = {};
    this.onToggle = this.onToggle.bind(this);
  }

  onToggle(node, toggled) {
    const {cursor} = this.state;

    if (cursor) {
      cursor.active = false;
    }

    node.active = true;
        if (node.children) {
          node.toggled = toggled;
        }

    this.setState({cursor: node});
  }

  componentWillMount() {
    this.props.loadMenu();
  }

  render() {

    const { isLoading, hasErrored, items, currentUrl, subMenuToggle } = this.props

    if (hasErrored) {
      return <p>Sorry! There was an error loading the items</p>;
    }

    if (isLoading) {
      return <p>Loading…</p>;
    }

    if (items.length) {
      return (
        <div>
          <Treebeard
             data={items}
             decorators={decorators}
             animation={animations}
             currentUrl={currentUrl}
             style={theme}
             onToggle={this.onToggle}
          />
        </div>
      );
    }

    return null;

  }
}

NestedMenu.propTypes = {
  items: PropTypes.array.isRequired,
  hasErrored: PropTypes.bool.isRequired,
  currentUrl: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
  decorators: PropTypes.object,
  animations: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool
  ]),
};

const mapStateToProps = (state) => {

  //console.log('NestedMenu', state);

  return {
    items: get('retrieveMenuData.items', state),
    hasErrored: get('retrieveMenuData.hasErrored', state),
    isLoading: get('retrieveMenuData.isLoading', state),
    currentUrl: get('router.location.pathname', state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadMenu: () => dispatch(attemptToRetrieveMenu())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NestedMenu);

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { get} from 'lodash/fp'

import {
  attemptToRetrieveMenu,
} from '../../modules/CatalogMenu';

import retrieveCatalogMenuData from "../../modules/CatalogMenu";

import style from './headerNavStyles';

import HeaderNav from './HeaderNav';

import data from '../../Data/CatalogMenu'

class megaMenu extends Component {

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

    if (items.length) {
      return (
        <div style={{display:'flex', height:'100%'}}>
          <HeaderNav
            data={items}
            style={style}
          />
        </div>
      );
    }
    return null;
  }
}

megaMenu.propTypes = {
  items: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => {
  return {
/*    items: get('retrieveCatalogMenuData.items', state),*/

    items: data,
    hasErrored: get('retrieveCatalogMenuData.hasErrored', state),
    isLoading: get('retrieveCatalogMenuData.isLoading', state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadMenu: () => dispatch(attemptToRetrieveMenu())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(megaMenu);

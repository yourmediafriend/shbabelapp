import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Query } from "react-apollo";
import gql from "graphql-tag";
import nestedMenuQuery from '../../graphQL/nestedMenuQuery';

import { get } from 'lodash/fp'
import {Treebeard} from '../TreeViewMenu';
import decorators from './decorators';
import animations from './themes/animations';
import theme from './themes/default';

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
    if (node.links.length) {
      node.toggled = toggled;
    }
    this.setState({cursor: node });
  }

  componentWillMount() {
    this.setState({node: this.props.data});
  }

  render() {

    console.log('render', this.state.node);

    return (
          <Treebeard
            data={this.state.node}
            decorators={decorators}
            animation={animations}
            currentUrl={this.props.currentUrl}
            style={theme}
            onToggle={this.onToggle}
          />
      );
  }
}

NestedMenu.propTypes = {
  currentUrl: PropTypes.string,
  decorators: PropTypes.object,
  animations: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool
  ]),
};

const mapStateToProps = (state) => {

  //console.log(state);

  return {
    currentUrl: get('router.location.pathname', state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(NestedMenu);

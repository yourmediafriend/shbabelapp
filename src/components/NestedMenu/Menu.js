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
    if (node.links.length) {
      node.toggled = toggled;
    }
    this.setState({cursor: node});
  }

  static getDerivedStateFromProps(props, state) {



    console.log('getDerivedStateFromProps', props, state);



    return {node: props.data };
  }

  render() {
    //console.log('render', this.state.node);
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
  return {
    currentUrl: get('router.location.pathname', state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(NestedMenu);

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
    this.setState({cursor: node});
  }

  render() {

    return (
      <Query query={nestedMenuQuery} >
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return `Error: ${error.message}`;
          if (data.menuByName.links.length) {
            return (
              <div>
              <Treebeard
                  data={Object.assign({}, data.menuByName.links) }
                  decorators={decorators}
                  animation={animations}
                  currentUrl={this.props.currentUrl}
                  style={theme}
                  onToggle={this.onToggle}
                />
              </div>
            );
          }
          return null; // replace this with something relevant
        }}
      </Query>
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

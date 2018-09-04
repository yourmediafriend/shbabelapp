import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Query } from "react-apollo";

import nestedMenuQuery from '../../graphQL/nestedMenuQuery';
import { cloneDeep } from 'lodash/fp';
import {Treebeard} from '../TreeViewMenu';
import decorators from './decorators';
import animations from './themes/animations';
import theme from './themes/default';
import Menu from './Menu';

class NestedMenu extends Component {


  render() {
    return (
      <Query query={nestedMenuQuery} >
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return `Error: ${error.message}`;
          if (data.menuByName.links.length) {


            console.log(data.menuByName.links);

            return (
              <Menu data={cloneDeep(data.menuByName.links)} />
            );
          }
          return null; // replace this with something relevant
        }}
      </Query>
    );
  }
}


export default NestedMenu;

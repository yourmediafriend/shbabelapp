import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Query } from "react-apollo";

import styles from './nestedMenu.scss';

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
          //  console.log(data.menuByName.links);
            return (
              <div className={styles.sidebarMenu}>
                <Menu data={cloneDeep(data.menuByName.links)} />
              </div>
            );
          }
          return null; // replace this with something relevant
        }}
      </Query>
    );
  }
}


export default NestedMenu;

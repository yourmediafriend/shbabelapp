import React, { Component } from 'react';
import styles from './styles.scss';
import cx from 'classnames';
import { ListGroup } from 'reactstrap';

import { Query } from "react-apollo";
import gridQuery from '../../graphQL/musicPlayerQuery';

import GridViewItem from './GridViewItem';

let GridView = (props) => {
  return (
    <ListGroup className={cx(styles.grid, props.className)}>
      {props.data.nodeQuery.entities.map((node, index) =>
        <GridViewItem {...node} key={index} id={index} {...props} />
      )}
    </ListGroup>
  );
}

class GridViewQuery extends Component {

  render() {
    return (
      <Query query={gridQuery} variables={{ limit:20 }} >
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return `Error: ${error.message}`;
          if (data.nodeQuery.entities.length) {
            return (
              <GridView data={data} {...this.props} />
            );
          }
        }}
      </Query>
    );
  }
}

export default GridViewQuery;

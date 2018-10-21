import React, { Component } from 'react';
import styles from './widget.scss';
import cx from 'classnames';
import { NavLink, ListGroup, ListGroupItem } from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';
import { Button } from 'reactstrap';

import Widget from './Widget';
import Latest from '../News/WidgetLatest';


class WidgetLatest extends Component {
  render() {
    return (
      <Widget className={cx(styles.widgetNewsLatest, 'newsLatest')}  header={<h4>Latest News</h4>} body={<Latest />}/>
    )
  }
}

export default WidgetLatest;

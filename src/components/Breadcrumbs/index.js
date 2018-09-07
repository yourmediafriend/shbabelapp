import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './breadcrumbs.scss';
import cx from 'classnames';

class Breadcrumbs extends Component {
  render() {
    return (
      <div className={cx('breadcrumbs',styles.breadcrumbs,this.props.className)}>
        <Link to={'/news'}>News</Link>
      </div>
    )
  }
}

export default Breadcrumbs;



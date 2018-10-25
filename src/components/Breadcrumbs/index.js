import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './breadcrumbs.scss';
import cx from 'classnames';

class Breadcrumbs extends Component {
  render() {
    return (
      <div className={cx('breadcrumbs',styles.breadcrumbs,this.props.className)}>
        <Link to={'/{this.props.url}'}>{this.props.title}'}</Link>
      </div>
    )
  }
}

Breadcrumbs.propType ={
  className: PropTypes.string,
  url: PropTypes.string,
  title: PropTypes.string,
}

Breadcrumbs.defaultProps ={
  className: PropTypes.string,
  url: 'news'
  title: 'News',
}

export default Breadcrumbs;



import React, { Component } from 'react';
import styles from './widget.scss';
import cx from 'classnames';


const WidgetSection = ({content, className}) => {
  return (
    <div className={className}>
      {content}
    </div>
  );
}

const Widget = (props) => {

  const {className, header, body, footer} = props;

  return (
    <div className={cx('widget', styles.widget, className)}>
      <div className={styles.inner}>
        {header ? <WidgetSection content={header}  className={styles.header} /> : ''}
        {body ? <WidgetSection content={body}  className={styles.body} /> : ''}
        {footer ? <WidgetSection content={footer}  className={styles.footer} /> : ''}
      </div>
    </div>
  )
}

export default Widget;

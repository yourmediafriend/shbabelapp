import React from 'react'
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './burgerIcon.scss';

const BurgerIcon = (props) => {

  const activeClass = props.menuIsOpen ? styles.active : '';

  return (
      <span className={classNames(styles.hamburgerBox, activeClass)} >
        <span className={styles.hamburgerInner}></span>
      </span>
  );

}

BurgerIcon.props = {
  menuIsOpen: PropTypes.bool,
}

export default BurgerIcon



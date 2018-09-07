import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './news.scss';

const Category = ({category}) => {

  if (category) {
    return (
      <div className={styles.category}>
        {category.entity.name}
      </div>
    );
  }
  return null;
}

const Image = ({image}) => {

  if (image) {
    return (
      <div className={styles.image}>
        <img src={image.url} alt={image.alt} />
      </div>
    );
  }
  return null;
}


export {
  Image,
  Category
}
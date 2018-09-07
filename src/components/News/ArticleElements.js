import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './news.scss';


const parseURL = (url) => {
  var parser = document.createElement('a'),
    searchObject = {},
    queries, split, i;
  // Let the browser do the work
  parser.href = url;
  // Convert query string to object
  queries = parser.search.replace(/^\?/, '').split('&');
  for( i = 0; i < queries.length; i++ ) {
    split = queries[i].split('=');
    searchObject[split[0]] = split[1];
  }
  return {
    protocol: parser.protocol,
    host: parser.host,
    hostname: parser.hostname,
    port: parser.port,
    pathname: parser.pathname.split("/"),
    search: parser.search,
    searchObject: searchObject,
    hash: parser.hash
  };
}



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
  let urlArray = parseURL(image.url);

  // fix in Drupal so it serves the publicID
  // if cloudinary
  // get path array
  // get publicId
  // or insert transformation into array and rebuild url

  if (image) {
    return (
      <div className={styles.image}>
        <img src={'http://res.cloudinary.com/dghff7rpa/image/upload/c_fit,h_150,q_100,w_280,x_447,y_803/v1536331737/2018-09/me.jpg'} alt={image.alt} />
      </div>
    );
  }
  return null;
}


export {
  Image,
  Category
}
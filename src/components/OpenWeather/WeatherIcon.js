import React, { Component } from 'react';
import SVGInline from "react-svg-inline"
import cx from 'classnames';
import { flow, get,map } from 'lodash/fp';
import styles from './openWeather.scss';

import WeatherIconJson from './icons.js';

const WeatherIconSvg = (iconRef, iconStyle) => {

  return flow(
    get(iconRef),
    (r) => {
      return iconStyle === 'simple' ? get('iconSimple',r) : get('icon',r);
    },
  )(WeatherIconJson)

}

const WeatherIcon = ({iconId, iconStyle}) => {

  let svg = WeatherIconSvg(iconId,iconStyle);

  if (svg) {
    return (
      <div>
        <SVGInline svg={svg} className={cx(styles.icon, styles.sun )} />
      </div>
    )
  }
  else {
    return null;
  }

}

export default WeatherIcon;


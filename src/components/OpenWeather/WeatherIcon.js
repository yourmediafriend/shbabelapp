import React from 'react';
import SVGInline from "react-svg-inline"
import cx from 'classnames';
import { flow, get } from 'lodash/fp';
import styles from './openWeather.scss';

import CloudsSimpleUrl, { ReactComponent as CloudsSimple } from './media/icons/simple/clouds.svg';

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

  console.log(CloudsSimple);


 if (svg) {
    return (
      <div>


   {/*
        <CloudsSimple />*/}



    {/*    <SVGInline svg={svg} className={cx(styles.icon, styles.sun )} />*/}

{/*
       */}
      </div>
    )
  }
  else {
    return null;
  }

}

export default WeatherIcon;


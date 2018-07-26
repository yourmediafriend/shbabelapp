import React, { Component } from 'react';
import cx from 'classnames';
import SVGInline from "react-svg-inline"
import VideoBackground from '../../Background/video';
import style from './compStyles.scss'
import bgSrc from '../../../media/backgrounds/video/drillo.mp4'
import XXX from '../../../media/x.svg';


import Square from './SquareComp'


class WeatherPage extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={style.container}>
        <div className={style.circle}>
          <VideoBackground bgSrc={bgSrc}/>

          <Square />

{/*          <SVGInline svg={ XXX } className={cx(style.svgMask )}  />*/}

        </div>
      </div>
    )
  }
}

export default WeatherPage;

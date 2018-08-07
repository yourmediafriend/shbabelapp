import React, { Component } from 'react';
import VideoBackground from '../../Background/video';
import style from './compStyles.scss'
import bgSrc from '../../../media/backgrounds/video/drillo.mp4'
import Square from './SquareComp'

class WeatherPage extends Component {
  render() {
    return (
      <div className={style.container}>
        <div className={style.circle}>
          <VideoBackground bgSrc={bgSrc}/>
          <Square />
        </div>
      </div>
    )
  }
}

export default WeatherPage;

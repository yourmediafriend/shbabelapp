import React, { Component } from 'react'
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {get} from "lodash/fp";
import cx from 'classnames';
import ReactPlayer from 'react-player';
import InputSlider from 'react-input-slider';

import InputRange from 'react-input-range';
import './inputRange.css';


import Duration from './Duration';
import styles from './musicPlayer.scss';
import { Image } from 'cloudinary-react';
import Icon from '../Icons';
import MusicQueuePopUp from './MusicQueue'
import {
  playPause,
  stop,
  toggleLoop,
  setVolume,
  toggleMuted,
  toggleShowRemaining,
  setPlaybackRate,
  setPlayheadPositon,
  setSeek,
  setSeekTo,
  onPlay,
  onPause,
  closeQueuePopUp,
  toggleQueuePopUp,
  loadTrack,
  positionControls
} from "../../modules/MusicPlayer";

class TrackDetails extends Component {

  render () {

    const {title, fieldArtist} = this.props;

    return (
      <div className={cx(styles.trackDetails)}>
        <span className={styles.artist}>{fieldArtist}</span>
        {fieldArtist && title ? <span className={styles.divide}>  -  </span> : '' }
        <span className={styles.title}>{title}</span>
      </div>
      );
  }
}

class VolumeSlider extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ymin: 0,
      ymax: 100,
      y: 100 - (props.volume * 100)
    };
  }

  onChange = value => {
    this.setState({
      y: value.y,
    });
    this.props.setVolume(parseFloat(((this.state.ymax)-(this.state.y))/100))
  }

  render() {
    return (
      <InputSlider
        className={cx(styles.slider, styles.sliderY)}
        axis="y"
        y={this.state.y}
        ymin={this.state.ymin}
        ymax={this.state.ymax}
        onChange={this.onChange.bind(this)}
      />
    );
  }
}

class TimelineSlider extends Component {

  constructor(props) {
    super(props);
    this.state = {
      xmin: 0,
      xmax: 100,
      x: 0,
    };
  }

  componentDidUpdate(prevProps, prevState) {

    // this doesn't help initial render.
    if (prevProps.played !==  this.props.played ) {
      this.setState({
        x: this.props.played,
      });
    }

  }

  onChange = value => {
    this.setState({
      x: value.x,
    });
  }

  onDragEnd = value => {
    this.props.setSeekTo(parseFloat(this.state.x/100))
  }

  render() {
    return (
      <InputSlider
        className={cx(styles.slider, styles.sliderX)}
        axis="x"
        x={this.state.x}
        xymin={this.state.xmin}
        xmax={this.state.xmax}
        onChange={this.onChange.bind(this)}
        onDragEnd={this.onDragEnd.bind(this)}
      />
    );
  }
}




class Controls extends Component {

  onSeekMouseDown = value => {
    console.log('onSeekMouseDown', value);
    this.props.setSeek(true)
  }

  onSeekChange = value => {
    console.log('onSeekChange', value);
    this.props.setPlayheadPositon(parseFloat(value/100))
  }

  onSeekMouseUp = value => {
    console.log('onSeekMouseUp', value);
    this.props.setSeekTo(parseFloat(value/100))
    this.props.setSeek(false)
  }


  render () {

    const { playPause, toggleLoop, toggleShowRemaining, toggleMuted, toggleQueuePopUp, track, playing, volume, muted, progress, duration, showRemaining, loadTrack } = this.props;

    return (
      <div className={cx(styles.controls, this.props.className, styles[this.props.class] )}>

        <div className={cx(styles.section, styles.controls)}>
          <button className={cx(styles.button, styles.playpause)} onClick={playPause}>
            {track.fieldTrack.uri && playing ? <span className={cx(styles.icon, styles.pause)}><Icon icon={'pause'} /></span> : <span className={cx(styles.icon, styles.play)}><Icon icon={'play'} /></span>}
          </button>
        </div>

        <div className={cx(styles.section, styles.controls)}>
          <button className={cx(styles.button, styles.loop)} onClick={toggleLoop}>
              <span className={cx(styles.icon, styles.loop)}>
                <Icon icon={'loop'} />
              </span>
          </button>
        </div>


        <div className={cx(styles.section, styles.timeline)}>
          <div className={cx(styles.cover)}>
            {track.fieldCover ? <Image cloudName="dghff7rpa" publicId={`mix/${track.fieldCover}`} width="40" crop="scale" /> : ''}
          </div>

          <div className={cx(styles.timelineWrap)}>

            <div className={styles.timelineDetails}>
              <div className={cx(styles.elapsed)}>
                <Duration seconds={duration * progress.played} />
              </div>

              {track.fieldTrack.uri ? <TrackDetails title={track.title }  fieldArtist={track.fieldArtist }/> : ''}

              <div className={cx(styles.duration)}>
                <div onClick={toggleShowRemaining}>{!(showRemaining) ?  <Duration seconds={duration} /> : <span>- <Duration seconds={duration * (1 - progress.played)} /></span>}</div>
              </div>
            </div>


            <div className={styles.barWrap}>

              <TimelineSlider played={progress.played * 100} setSeekTo={this.props.setSeekTo} />

     {/*         <InputRange
                maxValue={100}
                minValue={0}
                value={ progress.played * 100 }
                onChangeStart={value => this.onSeekMouseDown(value)}
                onChange={value => this.onSeekChange(value)}
                onChangeComplete={value => this.onSeekMouseUp(value)}
              />
*/}


            </div>



          </div>

        </div>

        <div className={cx(styles.section, styles.volume)}>
            <button className={cx(styles.button)} onClick={toggleMuted}>
              {muted ? <span className={cx(styles.icon, styles.mute)}><Icon icon={'mute'} /></span> : <span className={cx(styles.icon, styles.volume)}><Icon icon={'volume'} /></span>}
            </button>
            <div className={cx(styles.barWrap, styles.setVolume )}>
              <VolumeSlider volume={volume} setVolume={this.props.setVolume}    />
            </div>
        </div>

        <MusicQueuePopUp />
        {/* https://storage.googleapis.com/media-session/elephants-dream/the-wires.mp3*/}
        <div className={cx(styles.section, styles.select)}>
          {/*this.load('https://res.cloudinary.com/dghff7rpa/video/upload/v1533465886/Mixes/test.mp3')*/}
          <button className={cx(styles.button)} onClick={toggleQueuePopUp}>
            <span className={cx(styles.icon, styles.queue)}>
              <Icon icon={'queue'} color={'#000'} size={22} />
            </span>
          </button>
        </div>
      </div>
    )
  }
}

export const mapStateToProps = (state) => {
  return {
    track: get('musicPlayerModule.track', state),
    playing: get('musicPlayerModule.playing', state),
    volume: get('musicPlayerModule.volume', state),
    muted: get('musicPlayerModule.muted', state),
    duration: get('musicPlayerModule.duration', state),
    progress: get('musicPlayerModule.progress', state),
    showRemaining: get('musicPlayerModule.showRemaining', state),
  }
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      playPause,
      stop,
      toggleLoop,
      setVolume,
      toggleMuted,
      toggleShowRemaining,
      setPlaybackRate,
      setPlayheadPositon,
      setSeek,
      setSeekTo,
      onPlay,
      onPause,
      closeQueuePopUp,
      toggleQueuePopUp,
      loadTrack,
      positionControls
    },
    dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Controls);

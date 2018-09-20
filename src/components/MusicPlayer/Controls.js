import React, { Component } from 'react'
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {get} from "lodash/fp";
import cx from 'classnames';
import ReactPlayer from 'react-player';
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
            {playing ? <span className={cx(styles.icon, styles.pause)}><Icon icon={'pause'} /></span> : <span className={cx(styles.icon, styles.play)}><Icon icon={'play'} /></span>}
          </button>
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
          <div className={cx(styles.elapsed)}>
            <Duration seconds={duration * progress.played} />
          </div>
          <div className={cx(styles.timelineWrap)}>
            <InputRange
              maxValue={100}
              minValue={0}
              value={ progress.played * 100 }
              onChangeStart={value => this.onSeekMouseDown(value)}
              onChange={value => this.onSeekChange(value)}
              onChangeComplete={value => this.onSeekMouseUp(value)}
            />
          </div>
          <div className={cx(styles.duration)}>
            <div onClick={toggleShowRemaining}>{!(showRemaining) ?  <Duration seconds={duration} /> : <span>- <Duration seconds={duration * (1 - progress.played)} /></span>}</div>
          </div>
        </div>

        <div className={cx(styles.section, styles.volume)}>
          <button className={cx(styles.button)} onClick={toggleMuted}>
            {muted ? <span className={cx(styles.icon, styles.mute)}><Icon icon={'mute'} /></span> : <span className={cx(styles.icon, styles.volume)}><Icon icon={'volume'} /></span>}
          </button>
          <div className={cx(styles.barWrap, styles.setVolume )}>
            <InputRange
              maxValue={100}
              minValue={0}
              value={ volume * 100 }
              onChange={value => this.setVolume(value)}
            />
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

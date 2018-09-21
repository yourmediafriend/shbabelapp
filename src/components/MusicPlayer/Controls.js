import React, { Component } from 'react'
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {get} from "lodash/fp";
import cx from 'classnames';
import ReactPlayer from 'react-player';
import ReactHoverObserver from '../ReactHoverObserver';
import InputSlider from 'react-input-slider';


import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'

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
      min: 0,
      max: 100,
      value: props.volume * 100,
    };
  }

  onChange = value => {
    this.setState({
      value: value
    });
    this.props.setVolume(parseFloat(this.state.value/100))
  }

  render() {
    return (
      <Slider
        className={cx(styles.slider)}
        orientation="vertical"
        value={this.state.value}
        min={this.state.min}
        max={this.state.max}
        tooltip={false}
        step={0.1}
        onChange={this.onChange.bind(this)}
      />
    );
  }
}

class TimelineSlider extends Component {

  constructor(props) {
    super(props);
    this.state = {
      min: 0,
      max: 100,
      value: 0,
      seek: false
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if ((prevProps.progress.played !==  this.props.progress.played  && !this.state.seek)) {
      this.setState({
        value: this.props.progress.played * 100,
      });
    }
  }

  onChangeStart = value => {
    this.setState({
      seek: true
    });
  }

  onChange = value => {
    if (this.props.progress.loaded !== 0) {
      this.setState({
        value: value
      });
    }
  }

  onChangeComplete = value => {
    this.setState({
      seek: false
    });
    this.props.setSeekTo(parseFloat(this.state.value/100))
  }

  render() {
    return (
      <Slider
        className={cx(styles.slider, this.props.progress.loaded === 0 ? styles.disabled : styles.active)}
        orientation="horizontal"
        value={this.state.value}
        min={this.state.xmin}
        max={this.state.xmax}
        tooltip={false}
        step={0.1}
        onChangeStart={this.onChangeStart.bind(this)}
        onChange={this.onChange.bind(this)}
        onChangeComplete={this.onChangeComplete.bind(this)}
      />
    );
  }
}



class VolumeControl extends Component {

  render() {

    const { hoverDelay, hoverOffDelay, volume, muted, toggleMuted, setVolume } = this.props;

    return (
      <div className={cx(styles.section, styles.volume)}>
        <ReactHoverObserver
          hoverDelayInMs={hoverDelay ? hoverDelay : 0}
          hoverOffDelayInMs={hoverOffDelay ? hoverOffDelay : 0}
          className={cx(styles.reactHoverObserver)}
        >
          {({ isHovering }) => {
            return(
              <div>
                <button className={cx(styles.button)} onClick={toggleMuted}>
                  {muted ? <span className={cx(styles.icon, styles.mute)}><Icon icon={'mute'} /></span> : <span className={cx(styles.icon, styles.volume)}><Icon icon={'volume'} /></span>}
                </button>

                <div className={cx(styles.barWrap, styles.setVolume, isHovering ? styles.show : styles.hide )}>
                  <div className={cx(styles.inner)}>
                    <VolumeSlider volume={volume} setVolume={setVolume} />
                  </div>
                </div>
              </div>
            )
          }}
        </ReactHoverObserver>
      </div>
    )
  }
}

class Controls extends Component {

  render () {

    const { playPause, toggleLoop, toggleShowRemaining, toggleMuted, setVolume, toggleQueuePopUp, track, playing, volume, muted, progress, duration, showRemaining } = this.props;

    return (
      <div className={cx(styles.controls, this.props.className, styles[this.props.class] )}>

        <div className={cx(styles.section, styles.controls)}>
          <button className={cx(styles.button, styles.playpause)} onClick={playPause}>
            {track.fieldTrack.uri && playing ? <span className={cx(styles.icon, styles.pause)}><Icon icon={'pause'} /></span> : <span className={cx(styles.icon, styles.play)}><Icon icon={'play'} /></span>}
          </button>
        </div>

        <div className={cx(styles.section, styles.controls, styles.loop)}>
          <button className={cx(styles.button)} onClick={toggleLoop}>
              <span className={cx(styles.icon)}>
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
              <TimelineSlider  progress={progress} setSeekTo={this.props.setSeekTo} />
            </div>
          </div>
        </div>

        <VolumeControl hoverDelay={0} hoverOffDelay={800} muted={muted} volume={volume} toggleMuted={toggleMuted} setVolume={setVolume}/>

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

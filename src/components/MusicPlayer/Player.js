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
import {toggleQueuePopUp} from "../../modules/MusicPlayer";

class MusicPlayer extends Component {
  state = {
    loadTrack: false,
    playing: false,
    volume: 0.8,
    muted: false,
    played: 0,
    loaded: 0,
    duration: 0,
    playbackRate: 1.0,
    loop: false,
    showRemaining: false,
  }

  componentDidUpdate(prevProps, prevState) {

    // this doesn't help initial render.
    if (prevProps.loadTrack !==  this.props.loadTrack ) {
      this.load(this.props.loadTrack)
    }
    else if (prevProps.loadTrack === this.props.loadTrack ) {
      // toggle play / pause
    }
  }

  load = loadTrack => {
    this.setState({
      loadTrack,
      url: loadTrack.fieldTrack.uri,
      played: 0,
      loaded: 0,
      playing: true,
    })
  }

  playPause = () => {
    this.setState({ playing: !this.state.playing })
  }
  stop = () => {
    this.setState({ url: null, playing: false })
  }
  toggleLoop = () => {
    this.setState({ loop: !this.state.loop })
  }

  setVolume = value => {
    this.setState({ volume: parseFloat(value/100) })
  }

  toggleMuted = () => {
    this.setState({ muted: !this.state.muted })
  }

  toggleShowRemaining = () => {
    this.setState({ showRemaining: !this.state.showRemaining })
  }

  setPlaybackRate = e => {
    this.setState({ playbackRate: parseFloat(e.target.value) })
  }
  onPlay = () => {
    //console.log('onPlay')
    this.setState({ playing: true })
  }
  onPause = () => {
    //console.log('onPause')
    this.setState({ playing: false })
  }

  onSeekMouseDown = value => {
    this.setState({ seeking: true })
  }
  onSeekChange = value => {
    this.setState({ played: parseFloat(value/100)})
  }
  onSeekMouseUp = value => {
    this.setState({ seeking: false })
    this.player.seekTo(parseFloat(value/100))
  }

  onProgress = state => {
    //console.log('onProgress', state)
    // We only want to update time slider if we are not currently seeking
    if (!this.state.seeking) {
      this.setState(state)
    }
  }

  onEnded = () => {
    //console.log('onEnded')
    this.setState({ playing: this.state.loop })
  }

  onDuration = (duration) => {
    //console.log('onDuration', duration)
    this.setState({ duration })
  }

  ref = player => {
    this.player = player
  }

  render () {
    const { loadTrack, url, playing, volume, muted, loop, played, duration, playbackRate, showRemaining } = this.state;
    return (
      <ReactPlayer
        ref={this.ref}
        className='react-player'
        width='0'
        height='0'
        url={url}
        playing={playing}
        loop={loop}
        playbackRate={playbackRate}
        volume={volume}
        muted={muted}
        onReady={() => console.log('onReady')}
        onStart={() => console.log('onStart')}
        onPlay={this.onPlay}
        onPause={this.onPause}
        onBuffer={() => console.log('onBuffer')}
        onSeek={e => console.log('onSeek', e)}
        onEnded={this.onEnded}
        onError={e => console.log('onError', e)}
        onProgress={this.onProgress}
        onDuration={this.onDuration}
      />
    );
  }
}

export const mapStateToProps = (state) => {
  return {
    loadTrack: get('musicPlayerModule.loadTrack', state),
  }
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      toggleQueuePopUp,
    },
    dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(MusicPlayer);

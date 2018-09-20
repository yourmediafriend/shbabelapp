import React, { Component } from 'react'
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {get} from "lodash/fp";
import ReactPlayer from 'react-player';

import { setDuration,
         setProgress } from "../../modules/MusicPlayer";

class MusicPlayer extends Component {

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.seekTo !==  this.props.seekTo ) {
      this.player.seekTo(this.props.seekTo);
    }
  }

  ref = player => {
    this.player = player
  };

  onDuration = (duration) => {
    this.props.setDuration(duration)
  };

  onProgress = state => {
    if (!this.props.seeking) {
      this.props.setProgress(state)
    }
  };

  render () {
    const { track, playing, volume, muted, loop, playbackRate } = this.props;
    return (
      <ReactPlayer
        ref={this.ref}
        className='react-player'
        width='0'
        height='0'
        url={track.fieldTrack.uri}
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
        onProgress={this.onProgress.bind(this)}
        onDuration={this.onDuration.bind(this)}
      />
    );
  }
}

export const mapStateToProps = (state) => {
  return {
    track: get('musicPlayerModule.track', state),
    playing: get('musicPlayerModule.playing', state),
    volume: get('musicPlayerModule.volume', state),
    seeking: get('musicPlayerModule.seeking', state),
    muted: get('musicPlayerModule.muted', state),
    played: get('musicPlayerModule.played', state),
    duration: get('musicPlayerModule.duration', state),
    showRemaining: get('musicPlayerModule.showRemaining', state),
    seekTo: get('musicPlayerModule.seekTo', state),
  }
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setDuration,
      setProgress
    },
    dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MusicPlayer);

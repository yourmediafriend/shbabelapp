import React, { Component } from 'react'

import OneColumnCenter from '../../Layout/1ColumnCenter';
import styles from './footerMusicPlayer.scss';
import cx from 'classnames';

import { findDOMNode } from 'react-dom'
import { hot } from 'react-hot-loader'

import ReactPlayer from 'react-player';
import Duration from './Duration';
import tune from './media/tune.mp3'


class MusicPlayer extends Component {
  state = {
    url: null,
    playing: false,
    volume: 0.8,
    muted: false,
    played: 0,
    loaded: 0,
    duration: 0,
    playbackRate: 1.0,
    loop: false
  }


  load = url => {
    this.setState({
      url,
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
  setVolume = e => {
    this.setState({ volume: parseFloat(e.target.value) })
  }
  toggleMuted = () => {
    this.setState({ muted: !this.state.muted })
  }
  setPlaybackRate = e => {
    this.setState({ playbackRate: parseFloat(e.target.value) })
  }
  onPlay = () => {
    console.log('onPlay')
    this.setState({ playing: true })
  }
  onPause = () => {
    console.log('onPause')
    this.setState({ playing: false })
  }
  onSeekMouseDown = e => {
    this.setState({ seeking: true })
  }
  onSeekChange = e => {
    this.setState({ played: parseFloat(e.target.value) })
  }
  onSeekMouseUp = e => {
    this.setState({ seeking: false })
    this.player.seekTo(parseFloat(e.target.value))
  }
  onProgress = state => {
    console.log('onProgress', state)
    // We only want to update time slider if we are not currently seeking
    if (!this.state.seeking) {
      this.setState(state)
    }
  }
  onEnded = () => {
    console.log('onEnded')
    this.setState({ playing: this.state.loop })
  }
  onDuration = (duration) => {
    console.log('onDuration', duration)
    this.setState({ duration })
  }





  renderLoadButton = (url, label) => {
    return (
      <button onClick={() => this.load(url)}>
        {label}
      </button>
    )
  }




  ref = player => {
    this.player = player
  }
  render () {
    const { url, playing, volume, muted, loop, played, loaded, duration, playbackRate } = this.state
    const SEPARATOR = ' · '

    return (
      <div className={cx(styles.app)}>

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

        <div className={cx(styles.controls)}>
          <button onClick={this.playPause}>{playing ? 'Pause' : 'Play'}</button>
          <span>
            <label htmlFor='loop'>Loop
            <input id='loop' type='checkbox' checked={loop} onChange={this.toggleLoop} />
            </label>
          </span>
        </div>



        <div className={cx(styles.timeline)}>

          <div className={cx(styles.elapsed)}>
            <Duration seconds={duration * played} />
          </div>

          <div className={cx(styles.timelineWrap)}>
            <div className={cx(styles.barWrap, styles.range )}>
              <input
                className={cx(styles.bar)}
                type='range' min={0} max={1} step='any'
                value={played}
                onMouseDown={this.onSeekMouseDown}
                onChange={this.onSeekChange}
                onMouseUp={this.onSeekMouseUp}
              />
            </div>
            <div className={cx(styles.barWrap, styles.played )}>
              <progress className={cx(styles.bar)} max={1} value={played} />
            </div>
            <div className={cx(styles.barWrap, styles.loaded )}>
              <progress className={cx(styles.bar)} max={1} value={loaded} />
            </div>
          </div>


          <div className={cx(styles.duration)}>
            <Duration seconds={duration} />
            <br />
            <Duration seconds={duration * (1 - played)} />
          </div>

        </div>

        <div className={cx(styles.volume)}>
          <label htmlFor='muted'>Muted
          <input id='muted' type='checkbox' checked={muted} onChange={this.toggleMuted} />
          </label>
          <div className={cx(styles.barWrap, styles.setVolume )}>
            <input type='range' min={0} max={1} step='any' value={volume} onChange={this.setVolume} className={cx(styles.bar)} />
          </div>
        </div>

        <div className={cx(styles.select)}>
          {this.renderLoadButton(tune, 'mp3')}
        </div>

      </div>
    )
  }
}

// export default hot(module)()
//
//
//

const FooterMusicPlayer = props => {
  return (
    <OneColumnCenter contentMain={ <MusicPlayer />} />
  )
}

export default FooterMusicPlayer;

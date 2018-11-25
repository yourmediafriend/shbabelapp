import configureStore from 'redux-mock-store' //ES6 modules

import musicPlayerModule from '../reducers/musicPlayer';

import {
  CLOSE_QUEUE_POPUP,
  TOGGLE_QUEUE_POPUP,
  LOAD_TRACK,
  MOVE_CONTROLS,
  PLAY_PAUSE,
  STOP,
  TOGGLE_LOOP,
  SET_VOLUME,
  TOGGLE_MUTE,
  SET_MUTE,
  SHOW_REMAINING,
  SET_PLAYBACK_RATE,
  PLAY,
  PAUSE,
  SET_PLAYHEAD_POSITION,
  SET_SEEK,
  SET_PROGRESS,
  SET_DURATION,
  SET_SEEK_TO
} from '../reducers/musicPlayer';

// Test Reducer

describe('INITIAL_STATE', () => {

  test('is correct', () => {

    const action = { type: 'musicPlayer/PLAY_PAUSE', payload: {} };

    const initialState = {
      popUpIsOpen: false,
      position: 'footer',
      track: {
        fieldArtist: '',
        fieldCover: '',
        fieldTrack: {
          uri: ''
        },
        nid: 0,
        title: '',
      },
      playing: false,
      volume: 0.4,
      muted: false,
      played: 0,
      loaded: 0,
      duration: 0,
      playbackRate: 1.0,
      loop: false,
      showRemaining: false,
      seeking: false,
      seekTo: 0,
      progress: {
        loaded: 0,
        loadedSeconds: 0,
        played: 0,
        playedSeconds: 0,
      }
    };

    expect(musicPlayerModule(undefined, action)).toEqual(initialState);

  });
});

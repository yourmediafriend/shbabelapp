import configureStore from 'redux-mock-store' //ES6 modules

import musicPlayerModule from '../reducers/musicPlayer';


// Test Reducer

const initialState = {
  popUpIsOpen: false,
  position: 'footer',
  track: {
    nid: 0,
    title: '',
    fieldArtist: '',
    fieldCover: '',
    fieldTrack: {
      uri: ''
    },
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

describe('INITIAL_STATE', () => {
  test('is correct', () => {
    const action = { type: 'dummy_action' };
    expect(musicPlayerModule(undefined, action)).toEqual(initialState);
  });
});

describe('PLAY_PAUSE', () => {
  test('returns the correct state', () => {
    const action = { type: 'musicPlayer/PLAY_PAUSE'};
    expect(musicPlayerModule(undefined, action)).toEqual({...initialState, playing: !initialState.playing});
  });
});

describe('STOP', () => {
  test('returns the correct state', () => {
    const action = { type: 'musicPlayer/STOP' };
    expect(musicPlayerModule(undefined, action)).toEqual({...initialState, playing: false});
  });
});

describe('TOGGLE_LOOP', () => {
  test('returns the correct state', () => {
    const action = { type: 'musicPlayer/TOGGLE_LOOP'};
    expect(musicPlayerModule(undefined, action)).toEqual({...initialState, loop: !initialState.loop});
  });
});

describe('SET_VOLUME', () => {
  test('returns the correct state', () => {
    const action = { type: 'musicPlayer/SET_VOLUME',  payload: { volume: 100 }};
    expect(musicPlayerModule(undefined, action)).toEqual({...initialState, volume: action.payload.volume });
  });
});

describe('TOGGLE_MUTE', () => {
  test('returns the correct state', () => {
    const action = { type: 'musicPlayer/TOGGLE_MUTE' };
    expect(musicPlayerModule(undefined, action)).toEqual({...initialState, muted: !initialState.muted});
  });
});

describe('SET_MUTE', () => {
  test('returns the correct state', () => {
    const action = { type: 'musicPlayer/SET_MUTE', payload: { muted: false } };
    expect(musicPlayerModule(undefined, action)).toEqual({...initialState, showRemaining: action.payload.muted});
  });
});

describe('SHOW_REMAINING', () => {
  test('returns the correct state', () => {
    const action = { type: 'musicPlayer/SHOW_REMAINING'};
    expect(musicPlayerModule(undefined, action)).toEqual({...initialState, showRemaining: !initialState.showRemaining});
  });
});

describe('SET_PLAYHEAD_POSITION', () => {
  test('returns the correct state', () => {
    const action = { type: 'musicPlayer/SET_PLAYHEAD_POSITION', payload: { playheadPositon: 100 } };
    expect(musicPlayerModule(undefined, action)).toEqual({...initialState, progress: {
                                                                              ...initialState.progress,
                                                                              played: action.payload.playheadPositon
                                                                            }});
  });
});

describe('SET_SEEK', () => {
  test('returns the correct state', () => {
    const action = { type: 'musicPlayer/SET_SEEK', payload: { seeking: true } };
    expect(musicPlayerModule(undefined, action)).toEqual({...initialState, seeking: action.payload.seeking});
  });
});

describe('SET_SEEK_TO', () => {
  test('returns the correct state', () => {
    const action = { type: 'musicPlayer/SET_SEEK_TO', payload: { seekTo: 100 } };
    expect(musicPlayerModule(undefined, action)).toEqual({...initialState, seekTo: action.payload.seekTo});
  });
});

describe('SET_DURATION', () => {
  test('returns the correct state', () => {
    const action = { type: 'musicPlayer/SET_DURATION', payload: { duration: 100 } };
    expect(musicPlayerModule(undefined, action)).toEqual({...initialState, duration: action.payload.duration});
  });
});

describe('SET_PROGRESS', () => {
  test('returns the correct state', () => {
    const action = { type: 'musicPlayer/SET_PROGRESS', payload: { progress: { played: 100} }};
    expect(musicPlayerModule(undefined, action)).toEqual({...initialState, played: action.payload.progress.played,
                                                                           progress: {
                                                                             ...initialState.progress,
                                                                             played: action.payload.progress.played
                                                                           }});
  });
});

describe('PLAY', () => {
  test('returns the correct state', () => {
    const action = { type: 'musicPlayer/PLAY'};
    expect(musicPlayerModule(undefined, action)).toEqual({...initialState, playing: true});
  });
});

describe('PAUSE', () => {
  test('returns the correct state', () => {
    const action = { type: 'musicPlayer/PAUSE'};
    expect(musicPlayerModule(undefined, action)).toEqual({...initialState, playing: false});
  });
});

describe('CLOSE_QUEUE_POPUP', () => {
  test('returns the correct state', () => {
    const action = { type: 'musicPlayer/CLOSE_QUEUE_POPUP'};
    expect(musicPlayerModule(undefined, action)).toEqual({...initialState, popUpIsOpen: false});
  });
});

describe('TOGGLE_QUEUE_POPUP', () => {
  test('returns the correct state', () => {
    const action = { type: 'musicPlayer/TOGGLE_QUEUE_POPUP'};
    expect(musicPlayerModule(undefined, action)).toEqual({...initialState, popUpIsOpen: !initialState.popUpIsOpen});
  });
});

describe('LOAD_TRACK', () => {
  test('returns the correct state', () => {
    const action = { type: 'musicPlayer/LOAD_TRACK', payload: { track: 'url' }};
    expect(musicPlayerModule(undefined, action)).toEqual({...initialState, track: action.payload.track,
                                                                           playing: true,
                                                                           progress: {...initialState.progress}});
  });
});
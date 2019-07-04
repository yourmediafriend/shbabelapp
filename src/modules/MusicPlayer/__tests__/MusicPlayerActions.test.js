import configureStore from 'redux-mock-store' //ES6 modules

import musicPlayerModule, {
  playPause,
  stop,
  toggleLoop,
  setVolume,
  toggleMuted,
  setMuted,
  toggleShowRemaining,
  setPlayheadPositon,
  setSeek,
  setSeekTo,
  setPlaybackRate,
  onPlay,
  onPause,
  closeQueuePopUp,
  toggleQueuePopUp,
  loadTrack,
  setDuration,
  setProgress,
  positionControls,
} from '../reducers/musicPlayer';

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

// Test Actions
/*
  playPause,
  stop,
  toggleLoop,
  setVolume,
  toggleMuted,
  setMuted,
  toggleShowRemaining,
  setPlayheadPositon,
  setSeek,
  setSeekTo,
  setPlaybackRate,
  onPlay,
  onPause,
  closeQueuePopUp,
  toggleQueuePopUp,
  loadTrack,
  setDuration,
  setProgress,
  positionControls,
 */

const middlewares = []
const mockStore = configureStore(middlewares)

describe('playPause()', () => {
  it('should dispatch action', () => {

    // Initialize mockstore with empty state
    const initialState = {};
    const store = mockStore(initialState);

    // Dispatch the action
    store.dispatch(playPause());

    // Test if your store dispatched the expected actions
    const actions = store.getActions();
    const expectedPayload = { type: 'musicPlayer/PLAY_PAUSE' };

    expect(actions).toEqual([expectedPayload]);

  });
});

describe('stop()', () => {
  it('should dispatch action', () => {

    // Initialize mockstore with empty state
    const initialState = {};
    const store = mockStore(initialState);

    // Dispatch the action
    store.dispatch(stop());

    // Test if your store dispatched the expected actions
    const actions = store.getActions();
    const expectedPayload = { type: 'musicPlayer/STOP' };

    expect(actions).toEqual([expectedPayload]);

  });
});

describe('toggleLoop()', () => {
  it('should dispatch action', () => {

    // Initialize mockstore with empty state
    const initialState = {};
    const store = mockStore(initialState);

    // Dispatch the action
    store.dispatch(toggleLoop());

    // Test if your store dispatched the expected actions
    const actions = store.getActions();
    const expectedPayload = { type: 'musicPlayer/TOGGLE_LOOP' };

    expect(actions).toEqual([expectedPayload]);

  });
});

describe('setVolume()', () => {
  it('should dispatch action', () => {

    // Initialize mockstore with empty state
    const initialState = {};
    const store = mockStore(initialState);

    // Dispatch the action
    let value = 10;
    store.dispatch(setVolume(value));

    // Test if your store dispatched the expected actions
    const actions = store.getActions();
    const expectedPayload = { type: 'musicPlayer/SET_VOLUME', payload: {volume: value}};

    expect(actions).toEqual([expectedPayload]);

  });
});

describe('toggleMuted()', () => {
  it('should dispatch action', () => {

    // Initialize mockstore with empty state
    const initialState = {};
    const store = mockStore(initialState);

    // Dispatch the action
    store.dispatch(toggleMuted());

    // Test if your store dispatched the expected actions
    const actions = store.getActions();
    const expectedPayload = { type: 'musicPlayer/TOGGLE_MUTE' };

    expect(actions).toEqual([expectedPayload]);

  });
});

describe('setMuted()', () => {
  it('should dispatch action', () => {

    // Initialize mockstore with empty state
    const initialState = {};
    const store = mockStore(initialState);

    // Dispatch the action
    let value = true;
    store.dispatch(setMuted(value));

    // Test if your store dispatched the expected actions
    const actions = store.getActions();
    const expectedPayload = {type: 'musicPlayer/SET_MUTE', payload: {muted: value}};

    expect(actions).toEqual([expectedPayload]);

  });
});

describe('toggleShowRemaining()', () => {
  it('should dispatch action', () => {

    // Initialize mockstore with empty state
    const initialState = {};
    const store = mockStore(initialState);

    // Dispatch the action
    store.dispatch(toggleShowRemaining());

    // Test if your store dispatched the expected actions
    const actions = store.getActions();
    const expectedPayload = { type: 'musicPlayer/SHOW_REMAINING' };

    expect(actions).toEqual([expectedPayload]);

  });
});

describe('setPlaybackRate()', () => {
  it('should dispatch action', () => {

    // Initialize mockstore with empty state
    const initialState = {};
    const store = mockStore(initialState);

    let value = 10;
    // Dispatch the action
    store.dispatch(setPlaybackRate(value));

    // Test if your store dispatched the expected actions
    const actions = store.getActions();
    const expectedPayload = { type: 'musicPlayer/SET_PLAYBACK_RATE', payload: {playbackRate: parseFloat(value)} };

    expect(actions).toEqual([expectedPayload]);

  });
});

describe('setSeek()', () => {
  it('should dispatch action', () => {

    // Initialize mockstore with empty state
    const initialState = {};
    const store = mockStore(initialState);

    let value = 10;
    // Dispatch the action
    store.dispatch(setSeek(value));

    // Test if your store dispatched the expected actions
    const actions = store.getActions();

    const expectedPayload = {type: 'musicPlayer/SET_SEEK', payload: {seeking: value}};

    expect(actions).toEqual([expectedPayload]);

  });
});

describe('setSeekTo()', () => {
  it('should dispatch action', () => {

    // Initialize mockstore with empty state
    const initialState = {};
    const store = mockStore(initialState);

    // Dispatch the action
    let value = 10;
    store.dispatch(setSeekTo(value));

    // Test if your store dispatched the expected actions
    const actions = store.getActions();
    const expectedPayload = { type: 'musicPlayer/SET_SEEK_TO', payload: {seekTo: value} };

    expect(actions).toEqual([expectedPayload]);

  });
});

describe('setPlayheadPositon()', () => {
  it('should dispatch action', () => {

    // Initialize mockstore with empty state
    const initialState = {};
    const store = mockStore(initialState);

    // Dispatch the action
    let value = true;
    store.dispatch(setPlayheadPositon(value));

    // Test if your store dispatched the expected actions
    const actions = store.getActions();
    const expectedPayload = { type: 'musicPlayer/SET_PLAYHEAD_POSITION', payload: {playheadPositon: value} };

    expect(actions).toEqual([expectedPayload]);

  });
});

describe('onPlay()', () => {
  it('should dispatch action', () => {

    // Initialize mockstore with empty state
    const initialState = {};
    const store = mockStore(initialState);

    // Dispatch the action
    store.dispatch(onPlay());

    // Test if your store dispatched the expected actions
    const actions = store.getActions();
    const expectedPayload = { type: 'musicPlayer/PLAY' };

    expect(actions).toEqual([expectedPayload]);

  });
});

describe('setDuration()', () => {
  it('should dispatch action', () => {

    // Initialize mockstore with empty state
    const initialState = {};
    const store = mockStore(initialState);

    // Dispatch the action
    let value = 100;
    store.dispatch(setDuration(value));

    // Test if your store dispatched the expected actions
    const actions = store.getActions();
    const expectedPayload = { type: 'musicPlayer/SET_DURATION', payload: {duration:value } };
    expect(actions).toEqual([expectedPayload]);

  });
});

describe('closeQueuePopUp()', () => {
  it('should dispatch action', () => {

    // Initialize mockstore with empty state
    const initialState = {};
    const store = mockStore(initialState);

    // Dispatch the action
    store.dispatch(closeQueuePopUp());

    // Test if your store dispatched the expected actions
    const actions = store.getActions();
    const expectedPayload = { type: 'musicPlayer/CLOSE_QUEUE_POPUP' };

    expect(actions).toEqual([expectedPayload]);

  });
});

describe('toggleQueuePopUp()', () => {
  it('should dispatch action', () => {

    // Initialize mockstore with empty state
    const initialState = {};
    const store = mockStore(initialState);

    // Dispatch the action
    store.dispatch(toggleQueuePopUp());

    // Test if your store dispatched the expected actions
    const actions = store.getActions();
    const expectedPayload = { type: 'musicPlayer/TOGGLE_QUEUE_POPUP' } ;

    expect(actions).toEqual([expectedPayload]);

  });
});

describe('loadTrack()', () => {
  it('should dispatch action', () => {

    // Initialize mockstore with empty state
    const initialState = {};
    const store = mockStore(initialState);

    // Dispatch the action
    let value = 'url';
    store.dispatch(loadTrack(value));

    // Test if your store dispatched the expected actions
    const actions = store.getActions();
    const expectedPayload = { type: 'musicPlayer/LOAD_TRACK', payload: { track : value } };

    expect(actions).toEqual([expectedPayload]);

  });
});

describe('positionControls()', () => {
  it('should dispatch action', () => {

    // Initialize mockstore with empty state
    const initialState = {};
    const store = mockStore(initialState);

    // Dispatch the action
    let value = 100;
    store.dispatch(positionControls(value));

    // Test if your store dispatched the expected actions
    const actions = store.getActions();
    const expectedPayload = { type: 'musicPlayer/MOVE_CONTROLS', payload: { position: value} };

    expect(actions).toEqual([expectedPayload]);

  });
});
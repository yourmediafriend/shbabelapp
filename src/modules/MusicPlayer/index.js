import {takeEvery} from "redux-saga/effects";
import {get} from "lodash/fp";

import musicPlayerModule, { playPause,
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
                            positionControls,} from './reducers/musicPlayer';

import musicPlayerPosition from "./sagas/musicPlayerPosition";

import {footerClose} from "../Footer";

// Export Reducers
export default musicPlayerModule;

// Export Actions
export {
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
  positionControls
};

// Export Saga
export const musicPlayerSaga = function *() {
  yield [
    takeEvery(get('type', footerClose()), musicPlayerPosition)
  ];
}


/*

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
*/
import musicPlayerModule, { playPause,
                            stop,
                            toggleLoop,
                            setVolume,
                            toggleMuted,
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

import {takeEvery} from "redux-saga/effects";
import {get} from "lodash/fp";

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
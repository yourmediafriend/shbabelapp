import musicPlayerModule, { closeQueuePopUp, toggleQueuePopUp, loadTrack, positionControls } from './reducers/musicPlayer';
import {takeEvery} from "redux-saga/effects";
import {get} from "lodash/fp";

import musicPlayerPosition from "./sagas/musicPlayerPosition";

import {footerClose} from "../Footer";

// Export Reducers
export default musicPlayerModule;

// Export Actions
export {
  closeQueuePopUp,
  toggleQueuePopUp,
  loadTrack,
  positionControls,
};

// Export Saga
export const musicPlayerSaga = function *() {
  yield [
    takeEvery(get('type', footerClose()), musicPlayerPosition)
  ];
}
import modalModule, { modalOpen, modalClose, modalToggle } from './reducers/modal';
import {takeEvery} from "redux-saga";

import toggleSaga from "./sagas/toggle";

import {get} from "lodash/fp";

// Export Reducers
export default { modalModule };

// Export Actions
export {
  modalOpen,
  modalClose,
  modalToggle,
};

// Export Saga
export const modalSaga = function *() {
  yield [
    takeEvery(get('type', modalToggle()), toggleSaga),
  ];
}
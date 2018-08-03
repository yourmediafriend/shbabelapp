import searchModal, { searchModalOpen, searchModalClose, searchModalToggle } from './reducers/searchModal';
import {takeEvery} from "redux-saga";

import toggleSaga from "./sagas/toggle";

import {get} from "lodash/fp";

// Export Reducers
export default searchModal;

// Export Actions
export {
  searchModalOpen,
  searchModalClose,
  searchModalToggle,
};

// Export Saga
export const searchModalSaga = function *() {
  yield [
    takeEvery(get('type', searchModalToggle()), toggleSaga),
  ];
}
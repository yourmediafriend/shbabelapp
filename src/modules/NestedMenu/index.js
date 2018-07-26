import {
  takeEvery,
} from 'redux-saga';

import retrieveMenuData, { attemptToRetrieveMenu } from './reducers/retrieveMenuData';
import menuTreeToggle, { subMenuToggle } from './reducers/menuTreeToggle';

import getMenuData from './sagas/get';
import { get } from "lodash/fp";

// Export Reducers
export default {
  retrieveMenuData,
  menuTreeToggle,
};

// Export Actions
export {
  attemptToRetrieveMenu,
  subMenuToggle,
};

// Export Saga
export const nestedMenuSaga = function *() {
  yield [
    takeEvery(get('type', attemptToRetrieveMenu()), getMenuData),
  ];
}
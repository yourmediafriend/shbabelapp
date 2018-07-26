import {
  takeEvery,
} from 'redux-saga';

import retrieveMenuData, { attemptToRetrieveMenu } from './reducers/retrieveMenuData';
import getMenuData from './sagas/get';

import { get } from "lodash/fp";

// Export Reducers
export default retrieveMenuData;

// Export Actions
export {
  attemptToRetrieveMenu,
};

// Export Saga
export const catalogMenuSaga = function *() {
  yield [
    takeEvery(get('type', attemptToRetrieveMenu()), getMenuData),
  ];
}
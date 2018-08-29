import {
  takeEvery,
} from 'redux-saga/effects';

import retrieveMenuData, { attemptToLogin } from './reducers/userAuthenticaion';

import getMenuData from './sagas/get';
import { get } from "lodash/fp";

// Export Reducers
export default {
  retrieveMenuData,
  attemptToLogin,
};

// Export Actions
export {
  attemptToLogin,
};

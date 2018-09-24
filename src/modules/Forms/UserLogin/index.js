import postUserLoginForm, { attemptToLogin, failureToLogin, successToLogin } from './reducers/postUserLoginForm';
import login from './sagas/login';
import {takeEvery} from "redux-saga/effects";
import {get} from "lodash/fp";

// Export Reducers
export default postUserLoginForm;

// Export Actions
export {
  attemptToLogin,
  failureToLogin,
  successToLogin
};

// Export Saga
export const userLoginFormSaga = function *() {
  yield [
    takeEvery(get('type', attemptToLogin()), login),
  ];
}

import loginFormModule, { attemptToLogin, failureToLogin, successToLogin } from './reducers/loginFormReducer';
import login from './sagas/login';
import {takeEvery} from "redux-saga/effects";
import {get} from "lodash/fp";

// Export Reducers
export default loginFormModule;

// Export Actions
export {
  attemptToLogin,
  failureToLogin,
  successToLogin
};

// Export Saga
export const loginFormSaga = function *() {
  yield [
    takeEvery(get('type', attemptToLogin()), login),
  ];
}

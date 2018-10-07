import loginFormModule, { attemptToLogin, failureToLogin, successToLogin } from './reducers/loginReducer';
import loginSaga from './sagas/loginSaga';
import {takeLatest} from "redux-saga/effects";
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
    takeLatest(get('type', attemptToLogin()), loginSaga),
  ];
}

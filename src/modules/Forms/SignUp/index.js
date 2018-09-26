import signUpFormModule, { attemptToSubmit, failureToSubmit, successToSubmit, resetErrorMessage } from './reducers/signUpFormReducer';
import signUp from './sagas/signUpSaga';
import {takeEvery} from "redux-saga/effects";
import {get} from "lodash/fp";

// Export Reducers
export default signUpFormModule;

// Export Actions
export {
  attemptToSubmit,
  failureToSubmit,
  successToSubmit,
  resetErrorMessage,
};

// Export Saga
export const signUpFormSaga = function *() {
  yield [
    takeEvery(get('type', attemptToSubmit()), signUp),
  ];
}

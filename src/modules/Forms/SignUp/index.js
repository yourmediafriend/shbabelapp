import signUpFormModule, { attemptToSubmit, failureToSubmit, successToSubmit } from './reducers/signUpFormReducer';
import signUp from './sagas/signUp';
import {takeEvery} from "redux-saga/effects";
import {get} from "lodash/fp";

// Export Reducers
export default signUpFormModule;

// Export Actions
export {
  attemptToSubmit,
  failureToSubmit,
  successToSubmit
};

// Export Saga
export const signUpFormSaga = function *() {
  yield [
    takeEvery(get('type', attemptToSubmit()), signUp),
  ];
}

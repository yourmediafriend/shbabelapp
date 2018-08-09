import postContactForm, { attemptToSubmit, attemptToSubmitFailed, attemptToSubmitSuccess } from './reducers/postContactForm';

import postFormData from './sagas/post';
import {takeEvery} from "redux-saga/effects";
import {get} from "lodash/fp";

// Export Reducers
export default postContactForm;

// Export Actions
export {
  attemptToSubmit,
  attemptToSubmitFailed,
  attemptToSubmitSuccess,
  postFormData,
};

// Export Saga
export const contactFormSaga = function *() {
  yield [
    takeEvery(get('type', attemptToSubmit()), postFormData),
  ];
}

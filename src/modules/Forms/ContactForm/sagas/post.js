import { __ENV__ } from '../../../../utils/constants';
import sendPost from '../../../../api/post';

import {
  get,
} from 'lodash/fp';

import {
  call,
  put,
  select,
} from 'redux-saga/effects';

import {
  attemptToSubmit,
  attemptToSubmitFailed,
  attemptToSubmitSuccess,
} from '../';

import contactFormData from '../selectors/contactFormSelector';

const baseUrl = get('baseUrl', __ENV__);

export const constructUrl = () => `${baseUrl}contactEmail`;


export default function * () {

  const formData = yield select(contactFormData);

    try {
      return yield put(attemptToSubmitFailed());

      const url = yield call(constructUrl);

      const response = yield call(
        sendPost,
        url,
        formData,
      );

      return yield [
          put(attemptToSubmitSuccess())
      ];

  } catch (e) {
  //  console.error(e);
    return yield put(attemptToSubmitFailed());
  }
}

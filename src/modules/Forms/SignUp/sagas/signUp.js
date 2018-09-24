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
  failureToSubmit,
  successToSubmit,
} from '../';

import signUpFormData from '../selectors/signUpFormSelector';

const baseUrl = get('adminUrl', __ENV__);

export const constructUrl = () => `${baseUrl}user/register?_format=json`;

export default function * () {

  const formData = yield select(signUpFormData);

  let signUpData = {
    "name": { "value": get('name', formData)},
    "mail": { "value": get('email', formData)}
  }

  try {

    const url = yield call(constructUrl);
    yield call(
      sendPost,
      url,
      {
        'Content-Type': 'application/json'
      },
      signUpData,
    );

    return yield [
      put(successToSubmit())
    ];

  } catch (e) {
    console.error(e);
    return yield put(failureToSubmit());
  }
}

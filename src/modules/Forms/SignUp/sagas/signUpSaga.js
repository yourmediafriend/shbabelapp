import { __ENV__ } from '../../../../utils/constants';
import sendPost from '../../../../api/post';

import {
  get,
} from 'lodash/fp';

import {
  call,
  put,
} from 'redux-saga/effects';

import {
  failureToSubmit,
  successToSubmit,
} from '../';

import {reset} from 'redux-form';

const baseUrl = get('adminUrl', __ENV__);

export const constructUrl = () => `${baseUrl}user/register?_format=json`;

export default function * (attempt) {

  const { name, email } = attempt.payload;

  let signUpData = {
    "name": { "value": name },
    "mail": { "value": email }
  }

  try {
    const url = yield call(constructUrl);
    const response = yield call( sendPost,
                                  url,
                                  {
                                    'Content-Type': 'application/json'
                                  },
                                  signUpData,
                                );

    yield put(successToSubmit(response));
    yield put(reset('SignUpForm'));
    //  Add push to new page. With Message
  } catch (e) {
    yield put(failureToSubmit(e));
  }
}

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

    // console.log(e instanceof TypeError); // true
    // console.log(e.message);              // "null has no properties"
    // console.log(e.name);                 // "TypeError"
    // console.log(e.fileName);             // "Scratchpad/1"
    // console.log(e.lineNumber);           // 2
    // console.log(e.columnNumber);         // 2
    // console.log(e.stack);                // "@Scratchpad/2:2:3\n"


    return yield put(failureToSubmit(e));
  }
}

import { __ENV__ } from '../../../../utils/constants';

import { push } from 'react-router-redux'

import {
  get,
  isString,
} from 'lodash/fp';

import {
  call,
  put,
  fork,
} from 'redux-saga/effects';

import {
  failureToLogin,
  successToLogin,
} from '../';

import { clearToken } from '../../../../api/token';
import authenticateWithApi from '../../../../api/authenticate';

const baseUrl = get('adminUrl', __ENV__);

export const constructUrl = () => `${baseUrl}user/login?_format=json`;

const isFieldValid = (field) => isString(field);
const isPayloadValid = ({ username, password } = {}) => (
  isFieldValid(username) && isFieldValid(password)
);


export function *authenticate(url, username, password) {
  try {


   // const billboard = yield call(authenticateWithApi, url, username, password);

    const billboard = yield call(authenticateWithApi, url, 'test',  '>8DF}4..d/MwF+');

    debugger;

    const json = yield call([
      billboard,
      billboard.json,
    ]);
    yield put(successToLogin(username, json));
    yield put(push('/'));
  } catch (e) {
    yield put(failureToLogin());
  }
}


export default function * (attempt) {

  // Authenticate.
  // get token ?
  // Update Cookie.
  // const { username, password } = attempt.payload;
  // const authentication = yield fork(authenticate, username, password);

  try {

    if (!isPayloadValid(attempt.payload)) {
      throw new Error('invalid credentials');
    }

    const url = yield call(constructUrl);
    const { username, password } = attempt.payload;
    const authentication = yield fork(authenticate, url, username, password);

  } catch (e) {
    console.error(e);
    return yield put(failureToLogin());
  }
}

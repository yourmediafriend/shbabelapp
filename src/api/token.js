import { __ENV__ } from '../utils/constants';

import {
  call,
} from 'redux-saga/effects';

import {
  get,
} from 'lodash/fp';

export function *getToken() {
  const token = localStorage.getItem(get('tokenLocalStorageKey', __ENV__));
  if (token === null) {
    return yield call(get, 'apiKey', __ENV__);
  }
  return token;
}

export function setToken(token) {
  localStorage.setItem(get('tokenLocalStorageKey', __ENV__), token);
}

export function clearToken() {
  localStorage.removeItem(get('tokenLocalStorageKey', __ENV__));
}

import { __ENV__ } from '../utils/constants';

import {
  call,
} from 'redux-saga/effects';

import sendGet from './get';
import request from './request';

import {
  get,
  getOr,
} from 'lodash/fp';

import {
  btoa,
} from 'isomorphic-base64';

export function getUrl() {
  return getOr('no-base-url')('adminUrl')(__ENV__);
}

export function *getHeaders(username, password) {
  return {
    'Authorization': `Basic ${btoa(`${username}:${password}`)}`
  };
}

export default function *(username, password) {
  const url = yield call(getUrl);
  const headers = yield call(getHeaders, username, password);
  yield call(request, url, {
    headers,
    method: 'POST',
  });

  return yield call(sendGet, url);
}


import global from '../utils/constants';

import {
  call,
} from 'redux-saga/effects';

import request from './request';

export default function *(url, body) {
  const params = {
    body,
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/vnd.api+json',
    },
  };

  return yield call(request, url, params);
}

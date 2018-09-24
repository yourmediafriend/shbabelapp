import request from './request';

import {
  call,
} from 'redux-saga/effects';

export default function *(url, headers = {}, body) {

  console.log('POST', body);

  const params = {
    body,
    method: 'POST',
    headers: {
      'Content-Type': 'application/vnd.api+json',
      ...headers
    },
  };

  return yield call(request, url, params);
}

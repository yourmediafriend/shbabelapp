import 'isomorphic-fetch';

import {
  getOr,
} from 'lodash/fp';

import {
  call,
  put,
} from 'redux-saga/effects';

import {
  getToken,
  setToken,
} from './token';

import { requestMade, responseReceived, requestIsBad, requestFailed } from '../modules/ApiRequest';

export default function *(url, { method, headers = {}, body = null }) {

  const init = {
    method,
    headers: new Headers({
      Accept: 'application/vnd.api+json',
     /* Authorization: `Bearer ${yield call(getToken)}`,*/
      ...headers,
    }),
    body: body ? JSON.stringify(body) : undefined, // must match 'Content-Type' header
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, same-origin, *omit
    mode: 'cors', // no-cors, cors, *same-origin
    redirect: 'follow', // manual, *follow, error
    referrer: 'no-referrer', // *client, no-referrer
  };
  const request = new Request(url, init);

  yield put(requestMade(request));
  let response;
  try {
    response = yield call(fetch, request);
  } catch (e) {
    yield put(requestFailed(request));
    throw e;
  }
  if (response.ok) {
    yield put(responseReceived(response));
  } else {
    yield put(requestIsBad(request, response));
    const json = yield call([response, response.json]);
    throw new TypeError(
    getOr(
      'Bad response returned from API',
      'message',
      json
    )
  );
}
  return response;
}



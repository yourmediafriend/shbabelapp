import { __ENV__ } from '../../../utils/constants';
import sendGet from '../../../api/get';

import {
  get,
} from 'lodash/fp';

import {
  call,
  put,
} from 'redux-saga/effects';

import {
  failureToRetrieveData,
  successToRetrieveData
} from '../';


export const constructUrl = ({ lat, lng }) => {
  return 'http://maps.googleapis.com/maps/api/geocode/json?latlng='+lat+','+lng+'&sensor=true';
}

export default function * ( { payload }) {

  try {

    const url = yield call(constructUrl, payload);

    const response = yield call(
      sendGet,
      url
    );

    const data = yield call(() => response.json());

    return yield [
      put(successToRetrieveData(data))
    ];

  } catch (e) {
    console.error(e);
    return yield put(failureToRetrieveData());
  }
}

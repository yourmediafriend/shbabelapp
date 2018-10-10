import sendGet from '../../../api/get';

import {
  call,
  put,
} from 'redux-saga/effects';

import {
  failureToRetrieveData,
  successToRetrieveData
} from '../';
import {__ENV__} from "../../../utils/constants";

import { attemptToRetrieveOpenWeather } from '../../OpenWeather'

let apiKey = __ENV__.googleMapsApiKey;


export const constructUrl = ({ address, lat, lng }) => {
  let baseUrl = 'https://maps.googleapis.com/maps/api/geocode/json?key=' + apiKey + '&';
  return address ? baseUrl + 'address=' + address : baseUrl + 'latlng='+lat+','+lng+'&sensor=true' ;

}

export default function * ( { payload }) {

  try {

    const url = yield call(constructUrl, payload);

    const response = yield call(
      sendGet,
      url
    );

    const  data = yield call(() => response.json());

    return yield [
      put(successToRetrieveData(data)),
      put(attemptToRetrieveOpenWeather(data.results[0].geometry.location.lat, data.results[0].geometry.location.lng))

    ];

  } catch (e) {
    console.error(e);
    return yield put(failureToRetrieveData());
  }
}

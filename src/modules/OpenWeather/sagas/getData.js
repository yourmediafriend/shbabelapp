import { __ENV__ } from '../../../utils/constants';
import sendGet from '../../../api/get';

import {
  call,
  put,
} from 'redux-saga/effects';

import {
  failureToRetrieveOpenWeather,
  successToRetrieveOpenWeather
} from '../reducers/retrieveData';

let apiKey = __ENV__.openweatherApiKey;
//let location = null;
let baseUrl = __ENV__.openweatherUrl;
//let dataType = 'forecast'
let dataType = 'weather'

export const constructUrl = ({ address, lat, lng }) => {

  if (address)
  {
    return baseUrl + '/' + dataType + '?q=' + address + '&APPID=' + apiKey;
  }
  else /// It's a pin drop
  {
    return baseUrl + '/' + dataType + '?lat=' + lat + '&lon=' + lng  + '&APPID=' + apiKey;
  }

}

export default function * ( { payload }) {

  console.log('OPen Weather payload', payload);


  try {
    const url = yield call(constructUrl, payload);


    console.log('OPen Weather URL', url);

    const response = yield call(
      sendGet,
      url
    );
    const data = yield call(() => response.json());

    return yield [
      put(successToRetrieveOpenWeather(data))
    ];
  } catch (e) {
    console.error(e);
    return yield put(failureToRetrieveOpenWeather());
  }
}

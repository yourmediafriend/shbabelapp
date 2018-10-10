import { __ENV__ } from '../../../utils/constants';
import sendGet from '../../../api/get';
import getGoogleMapCords from '../selectors/getGoogleMapCords';


import {
  call,
  put,
  select,
} from 'redux-saga/effects';

import {
  updateOpenWeather,
} from '../';


export default function * ( { payload }) {

  const mapData = yield select(getGoogleMapCords);

  debugger;
  put(updateOpenWeather(mapData.lat, mapData.lng))

}

import {
  takeEvery,
} from 'redux-saga';

import {
  select,
} from 'redux-saga/effects';

import currentIpSelector from './selectors/currentIpSelector';

import retrieveIpData, { attemptToRetrieveIpData } from './reducers/retrieveIpData';

import getIpData from './sagas/getIpData';

import { get } from "lodash/fp";

// Export Reducers
export default retrieveIpData;

// Export Actions
export {
  attemptToRetrieveIpData
};

// Export Saga
export const ipDataRequestSaga = function *() {

  yield [
    takeEvery(get('type', attemptToRetrieveIpData()), getIpData),
  ];

}
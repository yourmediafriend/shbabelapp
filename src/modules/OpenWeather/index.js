import { takeEvery } from 'redux-saga/effects';
import { get } from "lodash/fp";

import { attemptToSubmit, failureToSubmit, successToSubmit  } from '../Forms/Weather';
import retrieveOpenWeather, { attemptToRetrieveOpenWeather, failureToRetrieveOpenWeather, successToRetrieveOpenWeather, updateOpenWeather  } from './reducers/retrieveData';

import getData from './sagas/getData'
import updateData from './sagas/updateData'

// Export Reducers
export default retrieveOpenWeather;

// Export Actions
export {
  attemptToRetrieveOpenWeather,
  failureToRetrieveOpenWeather,
  successToRetrieveOpenWeather,
  updateOpenWeather,
};

// Export Saga
export const openWeatherSaga = function *() {
  yield [
    takeEvery(get('type', attemptToRetrieveOpenWeather()), getData),
/*    takeEvery(get('type', attemptToSubmit()), updateData)*/
  ];
}
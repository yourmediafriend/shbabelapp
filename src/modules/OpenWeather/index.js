import { takeEvery } from 'redux-saga';
import { put } from 'redux-saga/effects';
import { get } from "lodash/fp";
import retrieveOpenWeather, { attemptToRetrieveOpenWeather, failureToRetrieveOpenWeather, successToRetrieveOpenWeather  } from './reducers/retrieveData';
import getData from './sagas/getData'

// Export Reducers
export default retrieveOpenWeather;

// Export Actions
export {
  attemptToRetrieveOpenWeather,
  failureToRetrieveOpenWeather,
  successToRetrieveOpenWeather,
};

// Export Saga
export const openWeatherSaga = function *() {
  yield [
    takeEvery(get('type', attemptToRetrieveOpenWeather()), getData)
  ];
}
import googleMapModule, { clickMap, attemptToRetrieveData, failureToRetrieveData, successToRetrieveData } from './reducers/googleMap';
import {takeEvery} from "redux-saga/effects";
import {get} from "lodash/fp";
import getData from "./sagas/getData";

// Export Reducers
export default googleMapModule;

// Export Actions
export {
  clickMap,
  attemptToRetrieveData,
  failureToRetrieveData,
  successToRetrieveData
};

// Export Saga
export const googleMapModuleSaga = function *() {
  yield [
    takeEvery(get('type', attemptToRetrieveData()), getData)
  ];
}
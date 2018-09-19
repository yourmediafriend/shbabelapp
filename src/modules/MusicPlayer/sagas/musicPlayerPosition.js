import {
  put,
} from 'redux-saga/effects';

import { positionControls } from '../'

export default function * () {
  yield put(positionControls('sidebar'))
}

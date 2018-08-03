import {
  put,
} from 'redux-saga/effects';

import { searchModalClose } from '../../Search'

export default function * () {
  yield put( searchModalClose())
}

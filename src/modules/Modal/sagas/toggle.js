import {
  put,
} from 'redux-saga/effects';

import { searchModalClose } from '../../Search'
import { offCanvasMenuClose } from '../../OffCanvasMenu'

export default function * () {
  yield put( searchModalClose())
  yield put( offCanvasMenuClose())
}

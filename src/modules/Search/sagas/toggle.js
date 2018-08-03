import {
  take,
  put,
} from 'redux-saga/effects';

import { modalClose } from '../../Modal'
import { offCanvasMenuClose } from '../../OffCanvasMenu'

export default function * () {
  yield put( modalClose() )
  yield put( offCanvasMenuClose())
}

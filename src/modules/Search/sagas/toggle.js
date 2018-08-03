import {
  take,
  put,
} from 'redux-saga/effects';

import { modalClose } from '../../Modal'

export default function * () {
   yield put( modalClose() )
}

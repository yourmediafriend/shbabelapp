import { __ENV__ } from '../../../utils/constants';
import sendGet from '../../../api/get';

import {
  get,
} from 'lodash/fp';

import {
  call,
  put,
} from 'redux-saga/effects';

import {
  failureToRetrieveMenu,
  successToRetrieveMenu,
} from '../reducers/retrieveMenuData';

const baseUrl = get('baseUrl', __ENV__);

export const constructUrl = () => `${baseUrl}CatalogMenu`;

export default function * () {

  try {
    const url = yield call(constructUrl);

    const response = yield call(
      sendGet,
      url
    );

    const menu = yield call(() => response.json());
    return yield [
      put(successToRetrieveMenu(menu))
    ];

  } catch (e) {
    console.error(e);
    return yield put(failureToRetrieveMenu());
  }
}

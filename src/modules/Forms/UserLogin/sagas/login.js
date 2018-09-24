import { __ENV__ } from '../../../../utils/constants';

import {
  get,
} from 'lodash/fp';

import {
  call,
  put,
  select,
} from 'redux-saga/effects';

import {
  failureToLogin,
  successToLogin,
} from '../';

import userLoginFormData from '../selectors/userLoginFormSelector';


import { clearToken } from '../../../../api/token';
import authenticateWithApi from '../../../../api/authenticate';



const baseUrl = get('adminUrl', __ENV__);

export const constructUrl = () => `${baseUrl}`;

export default function * () {

  const formData = yield select(userLoginFormData);

  // Authenticate.
  // get token ?
  // Update Cookie.


  console.log(formData);

  /*  const postData =  {
              "contact_form":[{"target_id":"contact_form"}],
              "subject":[{"value":"shBabel Webform"}],
            }*/


  try {

    const url = yield call(constructUrl);
    /*
          yield call(
                  sendPost,
                  url,
                  {
                    'Content-Type': 'application/json',
                  },
                  postData,
                );*/

    return yield [
      put(successToLogin())
    ];

  } catch (e) {
    console.error(e);
    return yield put(failureToLogin());
  }
}

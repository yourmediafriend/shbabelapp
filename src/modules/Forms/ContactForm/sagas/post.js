import { __ENV__ } from '../../../../utils/constants';
import sendPost from '../../../../api/post';

import {
  get,
} from 'lodash/fp';

import {
  call,
  put,
  select,
} from 'redux-saga/effects';

import {
  attemptToSubmit,
  attemptToSubmitFailed,
  attemptToSubmitSuccess,
} from '../';

import contactFormData from '../selectors/contactFormSelector';

const baseUrl = get('adminUrl', __ENV__);

export const constructUrl = () => `${baseUrl}contact_message?format=json`;


export default function * () {

  const formData = yield select(contactFormData);

  const postData =  {
                    "contact_form":[{"target_id":"contact_form"}],
                    "subject":[{"value":"shBabel Webform"}],
                    "message":[{"value":"_"}],
                    "field_first_name":[{"value": get('firstName', formData)}],
                    "field_last_name":[{"value": get('lastName', formData)}],
                    "field_email":[{"value": get('email', formData)}],
                    "field_phone_number":[{"value": get('phoneNumber', formData)}],
                    "field_message":[{"value": get('message', formData)}]
                  }

  try {

      const url = yield call(constructUrl);

      const response = yield call(
        sendPost,
        url,
        {
          'Content-Type': 'application/json',
        },
        postData,
      );

      return yield [
          put(attemptToSubmitSuccess())
      ];

  } catch (e) {
    console.error(e);
    return yield put(attemptToSubmitFailed());
  }
}

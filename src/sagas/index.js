import {
  fork,
} from 'redux-saga/effects';

import { nestedMenuSaga } from '../modules/NestedMenu';
import { contactFormSaga } from '../modules/Forms/ContactForm';
import { loginFormSaga } from '../modules/Forms/Login';
import { signUpFormSaga } from '../modules/Forms/SignUp';


import { catalogMenuSaga } from '../modules/CatalogMenu';
import { openWeatherSaga } from '../modules/OpenWeather';
import { googleMapModuleSaga } from '../modules/GoogleMaps';

import { modalSaga } from '../modules/Modal';
import { searchModalSaga } from '../modules/Search';
import { musicPlayerSaga } from '../modules/MusicPlayer';

export {
  nestedMenuSaga,
  catalogMenuSaga,
  contactFormSaga,
  openWeatherSaga,
  googleMapModuleSaga,
  modalSaga,
  searchModalSaga,
  musicPlayerSaga,
  signUpFormSaga,
  loginFormSaga,
};

export default function *() {
  yield [
    fork(nestedMenuSaga),
    fork(catalogMenuSaga),
    fork(contactFormSaga),
    fork(loginFormSaga),
    fork(signUpFormSaga),
    fork(openWeatherSaga),
    fork(googleMapModuleSaga),
    fork(modalSaga),
    fork(searchModalSaga),
    fork(musicPlayerSaga),
  ];
}
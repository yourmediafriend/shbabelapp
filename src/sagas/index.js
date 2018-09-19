import {
  fork,
} from 'redux-saga/effects';

import { nestedMenuSaga } from '../modules/NestedMenu';
import { contactFormSaga } from '../modules/Forms/ContactForm';
import { userLoginFormSaga } from '../modules/Forms/UserLogin';

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
};

export default function *() {
  yield [
    fork(nestedMenuSaga),
    fork(catalogMenuSaga),
    fork(contactFormSaga),
    fork(userLoginFormSaga),
    fork(openWeatherSaga),
    fork(googleMapModuleSaga),
    fork(modalSaga),
    fork(searchModalSaga),
    fork(musicPlayerSaga),
  ];
}
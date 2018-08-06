import {
  fork,
} from 'redux-saga/effects';

import { nestedMenuSaga } from '../modules/NestedMenu';
import { contactFormSaga } from '../modules/Forms/ContactForm';
import { catalogMenuSaga } from '../modules/CatalogMenu';
import { openWeatherSaga } from '../modules/OpenWeather';
import { googleMapModuleSaga } from '../modules/GoogleMaps';

import { modalSaga } from '../modules/Modal';
import { searchModalSaga } from '../modules/Search';


export {
  nestedMenuSaga,
  catalogMenuSaga,
  contactFormSaga,
  openWeatherSaga,
  googleMapModuleSaga,
  modalSaga,
  searchModalSaga,
};

export default function *() {
  yield [
    fork(nestedMenuSaga),
    fork(catalogMenuSaga),
    fork(contactFormSaga),
    fork(openWeatherSaga),
    fork(googleMapModuleSaga),
    fork(modalSaga),
    fork(searchModalSaga),
  ];
}
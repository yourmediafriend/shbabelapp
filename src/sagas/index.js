import {
  fork,
} from 'redux-saga/effects';

import { nestedMenuSaga } from '../modules/NestedMenu';
import { contactFormSaga } from '../modules/Forms/ContactForm';
import { catalogMenuSaga } from '../modules/CatalogMenu';
import { openWeatherSaga } from '../modules/OpenWeather';
import { googleMapModuleSaga } from '../modules/googleMaps';

export {
  nestedMenuSaga,
  catalogMenuSaga,
  contactFormSaga,
  openWeatherSaga,
  googleMapModuleSaga,
};

export default function *() {
  yield [
    fork(nestedMenuSaga),
    fork(catalogMenuSaga),
    fork(contactFormSaga),
    fork(openWeatherSaga),
    fork(googleMapModuleSaga),
  ];
}
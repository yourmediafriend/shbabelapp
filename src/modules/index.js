import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { reducer as formReducer } from 'redux-form';
import searchModal from './Search';

import modal from './Modal';
import nestedMenuReducers from './NestedMenu';
import retrieveCatalogMenuData from './CatalogMenu';
import postContactForm from './Forms/ContactForm';
import postUserLoginForm from './Forms/UserLogin';
import retrieveOpenWeather from './OpenWeather';
import offCanvasMenu from './OffCanvasMenu';

import appModule from "./App";
import footerModule from './Footer';
import googleMapsModule from "./GoogleMaps";
import musicPlayerModule from "./MusicPlayer";
import fullpageModule from "./Fullpage";
import userModule from './User';

export default combineReducers({
  router: routerReducer,
  form: formReducer,
  postContactForm,
  postUserLoginForm,
  offCanvasMenu,
  retrieveCatalogMenuData,
  searchModal,
  retrieveOpenWeather,
  googleMapsModule,
  appModule,
  musicPlayerModule,
  fullpageModule,
  footerModule,
  userModule,
  ...modal,
  ...nestedMenuReducers,
});


/*export reduceReducers({
  searchModal,
  ...modal,
});*/


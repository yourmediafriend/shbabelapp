import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { reducer as formReducer } from 'redux-form';
import searchModal from './Search';

import modal from './Modal';
import modalTestModule from './ModalTest';

import nestedMenuReducers from './NestedMenu';
import retrieveCatalogMenuData from './CatalogMenu';
import retrieveOpenWeather from './OpenWeather';
import offCanvasMenu from './OffCanvasMenu';

// Forms
import postContactForm from './Forms/ContactForm';
import loginFormModule from './Forms/Login';
import signUpFormModule from './Forms/SignUp';
import weatherFormModule from './Forms/Weather';

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
  weatherFormModule,
  loginFormModule,
  signUpFormModule,
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
  modalTestModule,
  ...modal,
  ...nestedMenuReducers,
});


/*export reduceReducers({
  searchModal,
  ...modal,
});*/


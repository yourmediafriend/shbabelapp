import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import searchModal from './Search';
import modal from './Modal';

import nestedMenuReducers from './NestedMenu';
import retrieveCatalogMenuData from './CatalogMenu';
import postContactForm from './Forms/ContactForm';
import retrieveOpenWeather from './OpenWeather';
import offCanvasMenu from './OffCanvasMenu';
import googleMapModule from "./googleMaps";
import mainModule from "./Main";


export default combineReducers({
  router: routerReducer,
  form: formReducer,
  postContactForm,
  offCanvasMenu,
  retrieveCatalogMenuData,
  searchModal,
  retrieveOpenWeather,
  googleMapModule,
  mainModule,
  ...modal,
  ...nestedMenuReducers,
});


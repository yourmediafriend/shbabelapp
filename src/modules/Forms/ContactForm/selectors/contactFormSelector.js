import { getFormValues } from 'redux-form';

export default (state) => {
  return getFormValues('ContactForm')(state);
}

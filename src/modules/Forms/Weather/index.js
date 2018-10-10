import weatherFormModule, { attemptToSubmit, failureToSubmit, successToSubmit } from './reducers/weatherReducer';


// Export Reducers
export default weatherFormModule;

// Export Actions
export {
  attemptToSubmit,
  failureToSubmit,
  successToSubmit,
};

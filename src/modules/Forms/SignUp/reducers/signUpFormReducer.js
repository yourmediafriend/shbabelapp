const ATTEMPT_TO_SIGNUP = "signUpForm/ATTEMPT_TO_SIGNUP";
const FAILURE_TO_SIGNUP = "signUpForm/FAILURE_TO_SIGNUP";
const SUCCESS_TO_SIGNUP = "signUpForm/SUCCESS_TO_SIGNUP";
const RESET_ERROR = "signUpForm/RESET_ERROR";



const initialState = {
  isLoading: false,
  hasErrored: false,
  message:'',
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    // do reducer stuff
    case ATTEMPT_TO_SIGNUP:
      return {
        ...state,
        isLoading: initialState.isLoading,
        hasErrored: initialState.hasErrored,
        message: initialState.message,
      };
    case FAILURE_TO_SIGNUP:
      return {
        ...state,
        ...action.payload,
        isLoading: initialState.isLoading,
      };
    case SUCCESS_TO_SIGNUP:
      return {
        ...state,
        isLoading: initialState.isLoading,
        hasErrored: initialState.hasErrored,
        message: initialState.message,
      };
    case RESET_ERROR:
      return {
        ...state,
        isLoading: initialState.isLoading,
        hasErrored: initialState.hasErrored,
        message: initialState.message,
      };
    default: return state;
  }
}

// actions

export function attemptToSubmit(values) {
  // console.log('attemptToSubmit', {values});
  return {
    type: ATTEMPT_TO_SIGNUP,
    payload: {
      values
    },
  };
}

export function failureToSubmit(e) {
  return {
    type: FAILURE_TO_SIGNUP,
    payload: {
      hasErrored: true,
      message: e.message
    },
  };
}

export function successToSubmit() {
  return {
    type: SUCCESS_TO_SIGNUP
  };
}

export function resetErrorMessage() {
  return {
    type: RESET_ERROR
  };
}
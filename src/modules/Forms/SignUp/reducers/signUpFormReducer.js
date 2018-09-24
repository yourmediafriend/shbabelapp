const ATTEMPT_TO_SIGNUP = "signUpForm/ATTEMPT_TO_SIGNUP";
const FAILURE_TO_SIGNUP = "signUpForm/FAILURE_TO_SIGNUP";
const SUCCESS_TO_SIGNUP = "signUpForm/SUCCESS_TO_SIGNUP";

const initialState = {
  isLoading: false,
  hasErrored: false,
  items: [],
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    // do reducer stuff
    case ATTEMPT_TO_SIGNUP:
      return {
        ...state
      };
    case FAILURE_TO_SIGNUP:
      return {
        ...state,
      };
    case SUCCESS_TO_SIGNUP:
      return {
        ...state
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

export function failureToSubmit(bool) {
  return {
    type: FAILURE_TO_SIGNUP,
    hasErrored: bool
  };
}

export function successToSubmit() {
  return {
    type: SUCCESS_TO_SIGNUP
  };
}
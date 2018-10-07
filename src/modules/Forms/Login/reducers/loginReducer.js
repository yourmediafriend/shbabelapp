const ATTEMPT_TO_LOGIN = "loginForm/ATTEMPT_TO_FETCH_DATA";
const FAILURE_TO_LOGIN = "loginForm/FAILURE_TO_FETCH_DATA";
const SUCCESS_TO_LOGIN = "loginForm/SUCCESS_TO_FETCH_DATA";

const initialState = {
  isLoading: false,
  hasErrored: false,
  items: [],
};

// Reducer
export default function reducer(state = initialState, action = {}) {

  switch (action.type) {
    // do reducer stuff
    case ATTEMPT_TO_LOGIN:
      return {
        ...state
      };
    case FAILURE_TO_LOGIN:
      return {
        ...state,
      };
    case SUCCESS_TO_LOGIN:
      return {
        ...state
      };
    default: return state;
  }
}

// actions

export function attemptToLogin(values) {
 // console.log('attemptToLogin', {values});
  return {
    type: ATTEMPT_TO_LOGIN,
    payload: {
      ...values
    },
  };
}

export function failureToLogin(bool) {
  return {
    type: FAILURE_TO_LOGIN,
    hasErrored: bool
  };
}

export function successToLogin() {
  return {
    type: SUCCESS_TO_LOGIN
  };
}
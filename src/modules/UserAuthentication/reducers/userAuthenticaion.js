const ATTEMPT_TO_LOGIN = "fetchMenuData/ATTEMPT_TO_FETCH_DATA";
const FAILURE_TO_LOGIN = "fetchMenuData/FAILURE_TO_FETCH_DATA";
const SUCCESS_TO_LOGIN = "fetchMenuData/SUCCESS_TO_FETCH_DATA";

const initialState = {
  isLoading: false,
  hasErrored: false,
  items: [],
};

// Reducer
export default function reducer(state = initialState, action = {}) {

  switch (action.type) {
    // do reducer stuff
    case ATTEMPT_TO_FETCH_DATA:
      return {
        ...state,
        isLoading: true,
      };

    case FAILURE_TO_FETCH_DATA:
      return {
        ...state,
        hasErrored: true,
      };

    case SUCCESS_TO_FETCH_DATA:

      return {
        ...state,
        isLoading: false,
        items: action.items,
      };

    default: return state;
  }
}

// actions

export function attemptToLogin(username, password) {
  return {
    type: ATTEMPT_TO_LOGIN,
    payload: {
      username,
      password,
    },
  };
}

export function failureToRetrieveMenu(bool) {
  return {
    type: FAILURE_TO_LOGIN,
    hasErrored: bool
  };
}

export function successToRetrieveMenu(items) {
  return {
    type: SUCCESS_TO_LOGIN,
    items
  };
}
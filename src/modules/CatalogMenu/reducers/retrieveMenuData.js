const ATTEMPT_TO_FETCH_XDATA = "fetchMenuData/ATTEMPT_TO_FETCH_XDATA";
const FAILURE_TO_FETCH_XDATA = "fetchMenuData/FAILURE_TO_FETCH_XDATA";
const SUCCESS_TO_FETCH_XDATA = "fetchMenuData/SUCCESS_TO_FETCH_XDATA";

const initialState = {
  isLoading: false,
  hasErrored: false,
  items: [],
};

// Reducer
export default function reducer(state = initialState, action = {}) {

  switch (action.type) {
    // do reducer stuff
    case ATTEMPT_TO_FETCH_XDATA:
      return {
        ...state,
        isLoading: true,
      };

    case FAILURE_TO_FETCH_XDATA:
      return {
        ...state,
        hasErrored: true,
      };

    case SUCCESS_TO_FETCH_XDATA:

      return {
        ...state,
        isLoading: false,
        items: action.items,
      };

    default: return state;
  }
}

// actions

export function attemptToRetrieveMenu() {
  return {
    type: ATTEMPT_TO_FETCH_XDATA,
  };
}

export function failureToRetrieveMenu(bool) {
  return {
    type: FAILURE_TO_FETCH_XDATA,
    hasErrored: bool
  };
}

export function successToRetrieveMenu(items) {
  return {
    type: SUCCESS_TO_FETCH_XDATA,
    items
  };
}
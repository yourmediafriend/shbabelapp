const ATTEMPT_TO_FETCH_DATA = "fetchIpData/ATTEMPT_TO_FETCH_DATA";
const FAILURE_TO_FETCH_DATA = "fetchIpData/FAILURE_TO_FETCH_DATA";
const SUCCESS_TO_FETCH_DATA = "fetchIpData/SUCCESS_TO_FETCH_DATA";

const initialState = {
  isLoading: false,
  hasErrored: false,
  currentIP: '0.0.0.0',
  ipData: [],
};

// Reducer
export default function reducer(state = initialState, action = {}) {

  switch (action.type) {
    // do reducer stuff
    case ATTEMPT_TO_FETCH_DATA:
      return {
        ...state,
        currentIP: action.currentIP,
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
        ipData: action.items,
      };

    default: return state;
  }
}

// actions

export function attemptToRetrieveIpData(currentIP) {
  return {
    type: ATTEMPT_TO_FETCH_DATA,
    currentIP: currentIP
  };
}

export function failureToRetrieveIpData(bool) {
  return {
    type: FAILURE_TO_FETCH_DATA,
    hasErrored: bool
  };
}

export function successToRetrieveIpData(items) {
  return {
    type: SUCCESS_TO_FETCH_DATA,
    items
  };
}
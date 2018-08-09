const UPDATE_MAP = "googlemap/UPDATE_MAP";
const ATTEMPT_TO_FETCH_DATA = "googlemap/ATTEMPT_TO_FETCH_DATA";
const FAILURE_TO_FETCH_DATA = "googlemap/FAILURE_TO_FETCH_DATA";
const SUCCESS_TO_FETCH_DATA = "googlemap/SUCCESS_TO_FETCH_DATA";


export const initialState = { };

// Reducer
export default function reducer(state=initialState, action = {}) {

  switch (action.type) {
    case UPDATE_MAP:
      return {
        ...state,
        x: action.event.x,
        y: action.event.y,
        lng: action.event.lng,
        lat: action.event.lat,
      }

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
        data: action.data,
      };

    default: return state;
  }
}

// Action Creators
export function clickMap(event) {
  return {
    type: UPDATE_MAP,
    event
  };
}

// actions
export function attemptToRetrieveData(lat, lng) {
  return {
    type: ATTEMPT_TO_FETCH_DATA,
    payload: {
      lat,
      lng
    }
  };
}

export function failureToRetrieveData() {
  return {
    type: FAILURE_TO_FETCH_DATA,
  };
}

export function successToRetrieveData(data) {
  return {
    type: SUCCESS_TO_FETCH_DATA,
    data
  };
}
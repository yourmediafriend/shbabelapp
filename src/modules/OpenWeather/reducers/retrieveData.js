const ATTEMPT_TO_FETCH_DATA = "fetchOpenWeatherData/ATTEMPT_TO_FETCH_DATA";
const FAILURE_TO_FETCH_DATA = "fetchOpenWeatherData/FAILURE_TO_FETCH_DATA";
const SUCCESS_TO_FETCH_DATA = "fetchOpenWeatherData/SUCCESS_TO_FETCH_DATA";
const UPDATE_DATA = "fetchOpenWeatherData/UPDATE_DATA";

const initialState = {
  isLoading: false,
  hasErrored: false,
  data: null,
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
        data: action.data,
      };
    case UPDATE_DATA:
      return {
        ...state,
        isLoading: false,
        data: action.data,
      };
    default: return state;
  }
}

// actions

export function updateOpenWeather(lat, lng) {
  return {
    type: UPDATE_DATA,
    payload: {
      lat,
      lng
    }
  };
}

export function attemptToRetrieveOpenWeather(lat, lng) {
  return {
    type: ATTEMPT_TO_FETCH_DATA,
    payload: {
      lat,
      lng
    }
  };
}

export function failureToRetrieveOpenWeather() {
  return {
    type: FAILURE_TO_FETCH_DATA,
  };
}

export function successToRetrieveOpenWeather(data) {
  return {
    type: SUCCESS_TO_FETCH_DATA,
    data
  };
}
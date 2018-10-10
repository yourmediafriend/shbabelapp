const ATTEMPT_TO_SUBMIT = "weatherForm/ATTEMPT_TO_SUBMIT";
const FAILURE_TO_SUBMIT = "weatherForm/FAILURE_TO_SUBMIT";
const SUCCESS_TO_SUBMIT = "weatherForm/SUCCESS_TO_SUBMIT";

const initialState = {
  isLoading: false,
  hasErrored: false,
};

// Reducer
export default function reducer(state = initialState, action = {}) {

  switch (action.type) {
    // do reducer stuff
    case ATTEMPT_TO_SUBMIT:
      return {
        ...state
      };
    case FAILURE_TO_SUBMIT:
      return {
        ...state,
      };
    case SUCCESS_TO_SUBMIT:
      return {
        ...state
      };
    default: return state;
  }
}

// actions

export function attemptToSubmit(values) {

  console.log('attemptToSubmit', {values});

  return {
    type: ATTEMPT_TO_SUBMIT,
    payload: {
      ...values
    },
  };
}

export function failureToSubmit(bool) {
  return {
    type: FAILURE_TO_SUBMIT,
    hasErrored: bool
  };
}

export function successToSubmit() {
  return {
    type: SUCCESS_TO_SUBMIT
  };
}
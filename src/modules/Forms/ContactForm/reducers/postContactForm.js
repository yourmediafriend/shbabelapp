const SUBMIT_MADE = "postContactForm/SUBMIT_MADE";
const SUBMIT_FAILED = "postContactForm/SUBMIT_FAILED";
const SUBMIT_SUCCESS = "postContactForm/SUBMIT_SUCCESS";

const initialState = {
  isSending: false,
  hasErrored: false,
};

// Reducer
export default function reducer(state = initialState, action = {}) {

  switch (action.type) {
    // do reducer stuff
    case SUBMIT_MADE:
      return {
        ...state,
        hasErrored: false,
        isSending: true,
      };

    case SUBMIT_FAILED:
      return {
        ...state,
        isSending: false,
        hasErrored: true,
      };

    case SUBMIT_SUCCESS:
      return {
        ...state,
        isSending: false,
      };

    default: return state;
  }
}

const attemptToSubmitSuccess = (response) => ({
  type: SUBMIT_SUCCESS,
  payload: {
    response,
  },
});

const attemptToSubmitFailed = () => {
  return   {
    type: SUBMIT_FAILED,
    error: true,
  };
};

const attemptToSubmit = (values) => {
  return   {
    type: SUBMIT_MADE,
    payload: {
      values,
    },
  };
};

export {
  attemptToSubmit,
  attemptToSubmitFailed,
  attemptToSubmitSuccess,
};

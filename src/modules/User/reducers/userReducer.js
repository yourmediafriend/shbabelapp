const GET_USER_DETAILS = "userdata/GET_USER_DETAILS";

const initialState = {
  userId: 1,
};

// Reducer
export default function reducer(state = initialState, action = {}) {

  switch (action.type) {
    // do reducer stuff
    case GET_USER_DETAILS:
      return {
        ...state,
      };
    default: return state;
  }
}

// actions

export function getUserID() {
  return {
    type: GET_USER_DETAILS
  };
}
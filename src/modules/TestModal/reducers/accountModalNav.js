const FORWARD = "accountModalNav/FORWARD";
const BACKWARD = "accountModalNav/BACKWARD";

export const initialState = {
  modalIsOpen: false
};

// Reducer
export default function reducer(state=initialState, action={}) {

  switch (action.type) {
    // do reducer stuff
    case FORWARD:
      // need to get the state of the menu
      return {
        ...state,
      }

    case BACKWARD:
      // need to get the state of the menu
      return {
        ...state,
      }

    default: return state;
  }
}

// Action Creators
export function accountModalForward() {
  return { type: FORWARD };
}

export function accountModalBackward() {
  return { type: BACKWARD };
}

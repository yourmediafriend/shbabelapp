const OPEN_MODAL = "modal/OPEN_MODAL";
const CLOSE_MODAL = "modal/CLOSE_MODAL";
const TOGGLE_MODAL = "modal/TOGGLE_MODAL";

export const initialState = {
  modals: [],
};

// Reducer
export default function reducer(state=initialState, action = {}) {

  switch (action.type) {
    // do reducer stuff
    case TOGGLE_MODAL:
      //console.log('TOGGLE_MODAL', action.payload);
      // need to get the state of the menu
      return {
        ...state,
      }

    case OPEN_MODAL:
      //console.log('OPEN_MODAL', action.payload);
      // need to get the state of the menu
      return {
        ...state,
        modals: state.modals.concat(action.payload)
      }

    case CLOSE_MODAL:
      //console.log('CLOSE_MODAL', action.payload);
      // need to get the state of the menu
      return {
        ...state,
        modals: state.modals.filter(item => item.id !== action.payload.id),
      }

    default: return state;
  }
}

// Action Creators
export function modalOpen(payload) {
  return {
    type: OPEN_MODAL,
    payload
  };
}

export function modalClose(payload) {
  return {
    type: CLOSE_MODAL,
    payload
  };
}

export function modalToggle(payload) {
  return {
    type: TOGGLE_MODAL,
    payload
  };
}

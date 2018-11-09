const OPEN_MODAL = "modaltest/OPEN_MODAL";
const CLOSE_MODAL = "modaltest/CLOSE_MODAL";
const TOGGLE_MODAL = "modaltest/TOGGLE_MODAL";

export const initialState = {
  isModalOpen: false,
};

// Reducer
export default function reducer(state=initialState, action = {}) {

  switch (action.type) {
    // do reducer stuff
    case TOGGLE_MODAL:
      console.log('TOGGLE_MODAL TEST');
      // need to get the state of the menu
      return {
        ...state,
        isModalOpen: !state.isModalOpen,
      }

    case OPEN_MODAL:
      console.log('OPEN_MODAL TEST');
      // need to get the state of the menu
      return {
        ...state,
        isModalOpen: true,
      }

    case CLOSE_MODAL:
      console.log('CLOSE_MODAL TEST');
      // need to get the state of the menu
      return {
        ...state,
        isModalOpen: false,
      }

    default: return state;
  }
}

// Action Creators
export function modalOpen() {
  return {
    type: OPEN_MODAL
  };
}

export function modalClose() {
  return {
    type: CLOSE_MODAL
  };
}

export function modalToggle() {
  return {
    type: TOGGLE_MODAL
  };
}

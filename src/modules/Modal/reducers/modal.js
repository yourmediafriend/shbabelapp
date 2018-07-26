const OPEN_MODAL = "modal/OPEN_MODAL";
const CLOSE_MODAL = "modal/CLOSE_MODAL";
const TOGGLE_MODAL = "modal/TOGGLE_MODAL";

export const initialState = {
  modalIsOpen: false,
  modalRef: 'default',
  contentId: 0,
};

// Reducer
export default function reducer(state=initialState, action = {}) {

  switch (action.type) {
    // do reducer stuff
    case TOGGLE_MODAL:
      // need to get the state of the menu
      return {
        ...state,
        modalIsOpen: !state.modalIsOpen,
      }

    case OPEN_MODAL:
      // need to get the state of the menu
      return {
        ...state,
        modalRef: action.payload.modalRef,
        contentId: action.payload.contentId,
        modalIsOpen: true,
      }

    case CLOSE_MODAL:
      // need to get the state of the menu
      return {
        ...state,
        modalIsOpen: false,
      }

    default: return state;
  }
}

// Action Creators
export function modalOpen(modalRef, contentId) {

  console.log('modalOpen');

  return {
    type: OPEN_MODAL,
    payload: {
      modalRef: modalRef,
      contentId: contentId,
    }
  };
}

export function modalClose() {
  return { type: CLOSE_MODAL };
}

export function modalToggle() {
  return { type: TOGGLE_MODAL };
}

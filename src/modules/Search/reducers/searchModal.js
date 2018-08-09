const OPEN_SEARCH = "searchModal/OPEN_SEARCH";
const CLOSE_SEARCH = "searchModal/CLOSE_SEARCH";
const TOGGLE_SEARCH = "searchModal/TOGGLE_SEARCH";

const OPEN_MODAL = "modal/OPEN_MODAL";


export const initialState = {
  searchIsOpen: false
};

// Reducer
export default function reducer(state=initialState, action={}) {

  switch (action.type) {
    // do reducer stuff
    case OPEN_SEARCH:
      // need to get the state of the menu
      return {
        ...state,
        searchIsOpen: true,
      }

    case CLOSE_SEARCH:
    case OPEN_MODAL:
      return {
        ...state,
        searchIsOpen: false,
        modalIsOpen: false,
      }

    case TOGGLE_SEARCH:
      return {
        ...state,
        searchIsOpen: !state.searchIsOpen,
      }

    default: return state;
  }
}

// Action Creators
export function searchModalOpen() {
  return { type: OPEN_SEARCH };
}
export function searchModalClose() {
  return { type: CLOSE_SEARCH };
}
export function searchModalToggle() {
  return { type: TOGGLE_SEARCH };
}

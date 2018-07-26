const OPEN_SEARCH = "searchModal/OPEN_SEARCH";
const CLOSE_SEARCH = "searchModal/CLOSE_SEARCH";

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
      // need to get the state of the menu
      return {
        ...state,
        searchIsOpen: false,
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

const OPEN_MENU = "dropdown/OPEN_MENU";
const CLOSE_MENU = "dropdown/CLOSE_MENU";
const TOGGLE_MENU = "dropdown/TOGGLE_MENU";

export const initialState = {
  menuIsOpen: false,
};

// Reducer
export default function reducer(state=initialState, action = {}) {

  switch (action.type) {
    // do reducer stuff
    case TOGGLE_MENU:
      // need to get the state of the menu
      return {
        ...state,
        menuIsOpen: !state.modalIsOpen,
      }

    case OPEN_MENU:
      // need to get the state of the menu
      return {
        ...state,
        menuIsOpen: true,
        contentId: action.payload.contentId,
      }

    case CLOSE_MENU:
      // need to get the state of the menu
      return {
        ...state,
        menuIsOpen: false,
      }

    default: return state;
  }
}

// Action Creators
export function megaMenuToggle() {
  return { type: TOGGLE_MENU };
}

export function megaMenuOpen(dropdownId) {
  return {
    type: OPEN_MENU,
  };
}

export function megaMenuClose() {
  return { type: CLOSE_MENU };
}

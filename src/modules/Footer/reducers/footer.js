const OPEN_FOOTER = "footerModule/OPEN_FOOTER";
const CLOSE_FOOTER = "footerModule/CLOSE_FOOTER";
const TOGGLE_FOOTER = "footerModule/TOGGLE_FOOTER";

export const initialState = {
  footerFixedOpen: true
};

// Reducer
export default function reducer(state=initialState, action = {}) {

  switch (action.type) {
    // do reducer stuff
    case TOGGLE_FOOTER:
      return {
        ...state,
        footerFixedOpen: !state.footerIsOpen
      }

    case OPEN_FOOTER:
      // need to get the state of the menu
      return {
        ...state,
        footerFixedOpen: true,
      }

    case CLOSE_FOOTER:
      // need to get the state of the menu

      console.log('CLOSE_FOOTER');

      return {
        ...state,
        footerFixedOpen: false,
      }

    default: return state;
  }
}

// Action Creators
export function footerOpen() {
  return { type: OPEN_FOOTER };
}

export function footerClose() {
  return { type: CLOSE_FOOTER };
}

export function footerToggle() {
  return { type: TOGGLE_FOOTER };
}

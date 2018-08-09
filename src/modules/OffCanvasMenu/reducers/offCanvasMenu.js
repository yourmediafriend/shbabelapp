const MENU_CLOSE = "my-app/offCanvasMenu/MENU_CLOSE";
const MENU_CHANGE = "my-app/offCanvasMenu/MENU_CHANGE";
const MENU_ANIMATING = "my-app/offCanvasMenu/MENU_ANIMATING";

export const initialState = {
  offCanvasMenuOpen: false,
  offCanvasMenuAnimating: false
};

// Reducer
export default function reducer(state = initialState, action = {}) {

  switch (action.type) {
    // do reducer stuff
    case MENU_CLOSE:
      return {
        ...state,
        offCanvasMenuOpen: false,
      };

    case MENU_CHANGE:
      return {
        ...state,
        offCanvasMenuOpen: !state.offCanvasMenuOpen,
      };

    case MENU_ANIMATING:
      return {
        ...state,
        offCanvasMenuAnimating: !state.offCanvasMenuAnimating,
      };

    default: return state;
  }
}

// Action Creators

export function offCanvasMenuToggleAnimation() {
  return {
    type: MENU_ANIMATING,
  };
}

export function offCanvasMenuStateChange() {
  // console.log('offCanvasMenuStateChange');
  return {
    type: MENU_CHANGE,
  };
}

export function offCanvasMenuClose() {
  return {
    type: MENU_CLOSE,
  };
}




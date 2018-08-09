const FIXED_FOOTER_HEIGHT = "appModule/FIXED_FOOTER_HEIGHT";
const REVEAL_FOOTER_HEIGHT = "appModule/REVEAL_FOOTER_HEIGHT";
const SET_CURRENT_BREAKPOINT = "appModule/SET_CURRENT_BREAKPOINT";

export const initialState = {
  fixedFooterHeight: 0,
  revealFooterHeight: 0,
  breakpoint: '',
};

// Reducer
export default function reducer(state=initialState, action = {}) {
  switch (action.type) {
    // do reducer stuff
    case FIXED_FOOTER_HEIGHT:
      return {
        ...state,
        fixedFooterHeight: action.payload.height,
      }

    case REVEAL_FOOTER_HEIGHT:
      return {
        ...state,
        revealFooterHeight: action.payload.height,
      }
    case SET_CURRENT_BREAKPOINT:
      return {
        ...state,
        breakpoint: action.payload.breakpoint,
      }


    default: return state;
  }
}

// Action Creators
export function setFixedFooterHeight(height) {
  return {
    type: FIXED_FOOTER_HEIGHT,
    payload: {
      height
    }
  };
}

export function setRevealFooterHeight(height) {
  return {
    type: REVEAL_FOOTER_HEIGHT,
    payload: {
      height
    }
  };
}

export function setCurrentBreakPoint(breakpoint) {
  return {
    type: SET_CURRENT_BREAKPOINT,
    payload: {
      breakpoint
    }
  };
}


const FIXED_FOOTER_HEIGHT = "mainModule/FIXED_FOOTER_HEIGHT";
const REVEAL_FOOTER_HEIGHT = "mainModule/REVEAL_FOOTER_HEIGHT";

export const initialState = {
  fixedFooterHeight: 0,
  revealFooterHeight: 0,
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



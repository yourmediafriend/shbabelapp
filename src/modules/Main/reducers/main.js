const FIXED_FOOTER_HEIGHT = "mainModule/FIXED_FOOTER_HEIGHT";

export const initialState = {
  fixedFooterHeight: 0
};

// Reducer
export default function reducer(state=initialState, action = {}) {
  switch (action.type) {
    // do reducer stuff
    case FIXED_FOOTER_HEIGHT:
      return {
        ...state,
        fixedFooterHeight: action.payload.fixedFooterHeight,
      }

    default: return state;
  }
}

// Action Creators
export function setFixedFooterHeight(fixedFooterHeight) {
  return {
    type: FIXED_FOOTER_HEIGHT,
    payload: {
      fixedFooterHeight
    }
  };
}


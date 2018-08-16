const HOVER_SINDY = "fullpage/HOVER_SINDY";

export const initialState = {
  activeTextLayer: 0,
};

// Reducer
export default function reducer(state=initialState, action = {}) {

 // console.log('reducer', action.payload.ref);

  switch (action.type) {
    // do reducer stuff
    case HOVER_SINDY:
      // need to get the state of the menu
      return {
        ...state,
        activeTextLayer: action.payload.ref
    }
    default: return state;
  }
}

// Action Creators
export function hoverSindy(ref) {

  console.log('hoverSindy', ref);

  return {
    type: HOVER_SINDY,
    payload: {
      ref: ref
    }
  };
}

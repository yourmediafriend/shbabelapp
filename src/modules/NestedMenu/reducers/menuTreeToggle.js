const SUBMENU_TOGGLE = "my-app/offCanvasMenu/SUBMENU_TOGGLE";

const initialState = {
  subMenuNode: []
};

// Reducer
export default function reducer(state = initialState, action = {}) {

  switch (action.type) {
    // do reducer stuff
    case SUBMENU_TOGGLE:
      return {
        ...state,
      };

    default: return state;
  }
}

// Action Creators

export function subMenuToggle(node, children) {
  return {
    type: SUBMENU_TOGGLE,
    payload: {
      node,
      children
    }
  };
}
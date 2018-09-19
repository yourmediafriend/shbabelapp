const CLOSE_QUEUE_POPUP = "musicPlayer/CLOSE_QUEUE_POPUP";
const TOGGLE_QUEUE_POPUP = "musicPlayer/TOGGLE_QUEUE_POPUP";
const LOAD_TRACK = "musicPlayer/LOAD_TRACK";
const MOVE_CONTROLS = "musicPlayer/MOVE_CONTROLS";

export const initialState = {
  popUpIsOpen: false,
  loadTrack: '',
  position: 'footer',
};

// Reducer
export default function reducer(state=initialState, action = {}) {

  switch (action.type) {
    // do reducer stuff
    case CLOSE_QUEUE_POPUP:
      return {
        ...state,
        popUpIsOpen: false,
      }
    case TOGGLE_QUEUE_POPUP:
      return {
        ...state,
        popUpIsOpen: !state.popUpIsOpen,
      }
    case LOAD_TRACK:
      return {
        ...state,
        loadTrack: action.payload.track
      }
    case MOVE_CONTROLS:
      return {
        ...state,
        position: action.payload.position
    }

    default: return state;
  }
}

// Action Creators
export function closeQueuePopUp(data) {
  return {
    type: CLOSE_QUEUE_POPUP,
    data
  };
}

export function toggleQueuePopUp(data) {
  return {
    type: TOGGLE_QUEUE_POPUP,
    data
  };
}

export function loadTrack(track) {
  return {
    type: LOAD_TRACK,
    payload: {
      track
    }
  };
}

export function positionControls(position) {
  return {
    type: MOVE_CONTROLS,
    payload: {
      position
    }
  };
}
const CLOSE_QUEUE_POPUP = "musicPlayer/CLOSE_QUEUE_POPUP";
const TOGGLE_QUEUE_POPUP = "musicPlayer/TOGGLE_QUEUE_POPUP";
const LOAD_TRACK = "musicPlayer/LOAD_TRACK";

export const initialState = {
  popUpIsOpen: false,
  loadTrack: ''
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
  console.log('toggleQueuePopUp');
  return {
    type: TOGGLE_QUEUE_POPUP,
    data
  };
}

export function loadTrack(track) {
  console.log('loadTrack', track);
  return {
    type: LOAD_TRACK,
    payload: {
      track
    }

  };
}
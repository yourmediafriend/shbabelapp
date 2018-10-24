const CLOSE_QUEUE_POPUP = "musicPlayer/CLOSE_QUEUE_POPUP";
const TOGGLE_QUEUE_POPUP = "musicPlayer/TOGGLE_QUEUE_POPUP";
const LOAD_TRACK = "musicPlayer/LOAD_TRACK";
const MOVE_CONTROLS = "musicPlayer/MOVE_CONTROLS";
const PLAY_PAUSE = "musicPlayer/PLAY_PAUSE";
const STOP = "musicPlayer/STOP";
const TOGGLE_LOOP = "musicPlayer/TOGGLE_LOOP";
const SET_VOLUME = "musicPlayer/SET_VOLUME";
const TOGGLE_MUTE = "musicPlayer/TOGGLE_MUTE";
const SET_MUTE = "musicPlayer/SET_MUTE";
const SHOW_REMAINING = "musicPlayer/SHOW_REMAINING";
const SET_PLAYBACK_RATE = "musicPlayer/SET_PLAYBACK_RATE";
const PLAY = "musicPlayer/PLAY";
const PAUSE = "musicPlayer/PAUSE";
const SET_PLAYHEAD_POSITION = "musicPlayer/SET_PLAYHEAD_POSITION";
const SET_SEEK = "musicPlayer/SET_SEEK";
const SET_PROGRESS = "musicPlayer/SET_PROGRESS";
const SET_DURATION = "musicPlayer/SET_DURATION";
const SET_SEEK_TO = "musicPlayer/SET_SEEK_TO";

export const initialState = {
  popUpIsOpen: false,
  position: 'footer',
  track: { fieldArtist: '',
            fieldCover: '',
            fieldTrack: {
              uri: ''
            },
            nid: 0,
            title: ''
          },
  playing: false,
  volume: 0.4,
  muted: false,
  played: 0,
  loaded: 0,
  duration: 0,
  playbackRate: 1.0,
  loop: false,
  showRemaining: false,
  seeking: false,
  seekTo: 0,
  progress: { loaded: 0,
              loadedSeconds: 0,
              played: 0,
              playedSeconds: 0 }
};

// Reducer
export default function reducer(state=initialState, action = {}) {

  switch (action.type) {

    case PLAY_PAUSE:
      return {
        ...state,
        playing: !state.playing,
      }
    case STOP:
      return {
        ...state,
        playing: false,
      }
    case TOGGLE_LOOP:
      return {
        ...state,
        loop: !state.loop,
      }
    case SET_VOLUME:
      return {
        ...state,
        volume: action.payload.volume,
      }
    case TOGGLE_MUTE:
      return {
        ...state,
        muted: !state.muted,
      }
    case SET_MUTE:
      return {
        ...state,
        muted: action.payload.muted,
      }
    case SHOW_REMAINING:
      return {
        ...state,
        showRemaining: !state.showRemaining
      }
    case SET_PLAYBACK_RATE:
      return {
        ...state,
        playbackRate: action.payload.playbackRate
      }

    case SET_PLAYHEAD_POSITION:
      return {
        ...state,
        progress: {
                    ...state.progress,
                    played: action.payload.playheadPositon
                   }
      }
    case SET_SEEK:
      return {
        ...state,
        seeking: action.payload.seeking
      }
    case SET_SEEK_TO:
      return {
        ...state,
        seekTo: action.payload.seekTo
      }
    case SET_DURATION:
      return {
        ...state,
        duration: action.payload.duration
      }
    case SET_PROGRESS:
      return {
        ...state,
        progress: action.payload.progress,
        played: action.payload.progress.played
      }
    case PLAY:
      return {
        ...state,
        playing: true,
      }
    case PAUSE:
      return {
        ...state,
        playing: false,
      }
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
        track: action.payload.track,
        progress : initialState.progress,
        playing: true
      }
    case MOVE_CONTROLS:
      return {
        ...state,
/*        position: action.payload.position*/
    }

    default: return state;
  }
}

// Action Creators

export const playPause = () => {
  return {
    type: PLAY_PAUSE,
  };
}

export const stop = () => {
  return {
    type: STOP,
  };
}

export const toggleLoop = () => {
  return {
    type: TOGGLE_LOOP,
  };
}

export const setVolume = value => {
  return {
    type: SET_VOLUME,
    payload: {
      volume: value
    }
  };
}

export const toggleMuted = () => {
  return {
    type: TOGGLE_MUTE,
  };
}

export const setMuted = (muted) => {
  return {
    type: SET_MUTE,
    payload: {
      muted,
    }
  };
}



export const toggleShowRemaining = () => {
  return {
    type: SHOW_REMAINING,
  };
}

export const setPlaybackRate = value => {
  return {
    type: SET_PLAYBACK_RATE,
    payload: {
      playbackRate: parseFloat(value)
    }
  };
}

export const setSeek = (value) => {
  return {
    type: SET_SEEK,
    payload: {
      seeking: value
    }
  };
}

export const setSeekTo = (value) => {
  return {
    type: SET_SEEK_TO,
    payload: {
      seekTo: value
    }
  };
}
export const setPlayheadPositon = value => {
  return {
    type: SET_PLAYHEAD_POSITION,
    payload: {
      playheadPositon: value
    }
  };
}
export const onPlay = () => {
  return {
    type: PLAY,
  };
}

export const onPause = () => {
  return {
    type: PAUSE,
  };
}

export const setDuration = (value) => {
  return {
    type: SET_DURATION,
    payload: {
      duration: value
    }
  };
}

export const setProgress = (value) => {
  return {
    type: SET_PROGRESS,
    payload: {
      progress: value
    }
  };
}

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
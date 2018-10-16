const PAGE_SETUP = "appModule/PAGE_SETUP";
const FIXED_FOOTER = "appModule/FIXED_FOOTER";
const REVEAL_FOOTER = "appModule/REVEAL_FOOTER";
const STICKY_HEADER = "appModule/STICKY_HEADER";
const ICON_NAV_POSITON = "appModule/ICON_NAV_POSITON";

const SET_CURRENT_BREAKPOINT = "appModule/SET_CURRENT_BREAKPOINT";

export const initialState = {
  fixedFooter: true,
  revealFooter: true,
  stickyHeader: true,
  iconNavPosition: {
    side: true,
    top: true
  }
};

// Reducer
export default function reducer(state=initialState, action = {}) {
  switch (action.type) {
    // do reducer stuff

    case PAGE_SETUP:
      return {
        ...state,
        ...action.payload
      }

    case FIXED_FOOTER:
      return {
        ...state,
        fixedFooterHeight: true,
      }

    case REVEAL_FOOTER:
      return {
        ...state,
        revealFooterHeight: true,
      }

    case STICKY_HEADER:
      return {
        ...state,
        stickyHeaderHeight: true,
      }

    case ICON_NAV_POSITON:
      return {
        ...state,
        iconNavPosition: action.payload.iconNavPosition,
      }


    case SET_CURRENT_BREAKPOINT:
      return {
        ...state,
        breakpoint: action.payload.breakpoint,
      }


    default: return state;
  }
}


export function setUpPage(appSetup) {
  return {
    type: PAGE_SETUP,
    payload: {
      ...appSetup
    }
  };
}

// Action Creators
export function setFixedFooter() {
  return {
    type: STICKY_HEADER,
  };
}

export function setRevealFooter() {
  return {
    type: REVEAL_FOOTER,
  };
}

export function setStickyHeader() {
  return {
    type: STICKY_HEADER,
  };
}

export function setIconNavPosition(iconNavPosition) {
  return {
    type: ICON_NAV_POSITON,
    payload: {
      iconNavPosition
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


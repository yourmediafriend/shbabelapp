const ITEMS_IS_LOADING = "my-app/thunkTestCombo/ITEMS_IS_LOADING";
const ITEMS_HAS_ERRORED = "my-app/thunkTestCombo/ITEMS_HAS_ERRORED";
const ITEMS_FETCH_DATA_SUCCESS = "my-app/thunkTestCombo/ITEMS_FETCH_DATA_SUCCESS";

export const initialState = {
  isLoading: false,
  hasErrored: false,
  items: [],
};

// Reducer
export default function reducer(state = initialState, action = {}) {

  switch (action.type) {
    // do reducer stuff
    case ITEMS_IS_LOADING:

      return {
        ...state,
        isLoading: action.isLoading,
      };

    case ITEMS_HAS_ERRORED:
      return {
        ...state,
        hasErrored: action.hasErrored,
      };

    case ITEMS_FETCH_DATA_SUCCESS:

      return {
        ...state,
        items: action.items,
      };

    default: return state;
  }
}

// actions

export function itemsIsLoading(bool) {
  return {
    type: ITEMS_IS_LOADING,
    isLoading: bool
  };
}

export function itemsHasErrored(bool) {
  return {
    type: ITEMS_HAS_ERRORED,
    hasErrored: bool
  };
}

export function itemsFetchDataSuccess(items) {
  return {
    type: ITEMS_FETCH_DATA_SUCCESS,
    items
  };
}


// Thunk Action

export function itemsFetchData(url) {
  return (dispatch) => {

    dispatch(itemsIsLoading(true));

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(itemsIsLoading(false));

        return response;
      })
      .then((response) => response.json())
      .then((items) => dispatch(itemsFetchDataSuccess(items)))
      .catch(() => dispatch(itemsHasErrored(true)));
  };
}
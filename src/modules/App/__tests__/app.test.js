import appModule, {
  setCurrentBreakPoint,
  setUpPage,
  setIconNavConfig,
} from '../index';

import {
  PAGE_SETUP,
  SET_CURRENT_BREAKPOINT,
  ICON_NAV_CONFIG
} from '../reducers/app';

import configureStore from 'redux-mock-store' //ES6 modules

// Test Reducer

describe('INITIAL_STATE', () => {

  test('is correct', () => {
    const action = { type: 'appModule/ICON_NAV_CONFIG', payload: {} };

    const initialState = {
      fixedFooter: true,
      revealFooter: true,
      stickyHeader: true,
      breakpoint: 's',
      iconNavConfig: {
        side: {},
        top: {}
      }
    };

    expect(appModule(undefined, action)).toEqual(initialState);

  });
});

describe('SET_CURRENT_BREAKPOINT', () => {
  test('returns the correct state', () => {
    const action = { type: SET_CURRENT_BREAKPOINT, breakpoint: 's' };

    const expectedState = {
      fixedFooter: true,
      revealFooter: true,
      stickyHeader: true,
      breakpoint: 's',
      iconNavConfig: {
        side: {},
        top: {}
      }
    };
    expect(appModule(undefined, action)).toEqual(expectedState);
  });
});


// Test Actions

const middlewares = []
const mockStore = configureStore(middlewares)

it('should dispatch action', () => {

  // Initialize mockstore with empty state
  const initialState = {};
  const store = mockStore(initialState);

  // Dispatch the action
  store.dispatch(setCurrentBreakPoint());

  // Test if your store dispatched the expected actions
  const actions = store.getActions();
  const expectedPayload = { type: 'appModule/SET_CURRENT_BREAKPOINT', payload: {} };

  expect(actions).toEqual([expectedPayload]);

});

it('should dispatch action', () => {

  // Initialize mockstore with empty state
  const initialState = {};
  const store = mockStore(initialState);

  // Dispatch the action
  store.dispatch(setUpPage());

  // Test if your store dispatched the expected actions
  const actions = store.getActions();
  const expectedPayload = { type: 'appModule/PAGE_SETUP', payload: {} };

  expect(actions).toEqual([expectedPayload]);

});

it('should dispatch action', () => {

  // Initialize mockstore with empty state
  const initialState = {};
  const store = mockStore(initialState);

  // Dispatch the action
  store.dispatch(setIconNavConfig());

  // Test if your store dispatched the expected actions
  const actions = store.getActions();
  const expectedPayload = { type: 'appModule/ICON_NAV_POSITON', payload: {} };

  expect(actions).toEqual([expectedPayload]);

});
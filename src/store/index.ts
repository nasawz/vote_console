import { init } from '@rematch/core';
import { svModel } from '../models/svModel';
import { settings } from '../models/settings';

import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';
import { LOCATION_CHANGE } from 'react-router-redux';
const merge = (state, payload) => ({ ...state, ...payload });
const routerReducer = (history) => {
  const initialState = {
    location: history.location,
    action: history.action
  };
  return (state = initialState, { type = null, payload = null } = {}) => {
    if (type === LOCATION_CHANGE) {
      return merge(state, payload);
    }

    return state;
  };
};
const history = createHistory();
const middleware = routerMiddleware(history);
const store = init({
  models: {
    svModel,
    settings
  },
  redux: {
    reducers: {
      router: routerReducer(history)
    },
    middlewares: [middleware]
  }
});

export { store, history };

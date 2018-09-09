import { init } from '@rematch/core';
import { svModel } from '../models/svModel';
import { settings } from '../models/settings';
import { location } from '../models/location';
import createHistory from 'history/createBrowserHistory';

const history = createHistory();
const store = init({
  models: {
    svModel,
    settings,
    location: location(history.location)
  }
});
const { dispatch } = store;
history.listen((location, action) => {
  dispatch.location.changeLocation(location);
});

export { store, history };

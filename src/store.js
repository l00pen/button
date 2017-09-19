import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from './middleware/redux-thunk';

import actionButtonAnimation from './reducers/action-button-animation';

const rootReducer = combineReducers({
  actionButtonAnimation,
});

const middlewares = [thunk];

let store;

export default {
  get(initialState = {}) {
    if (!store) {
      store = createStore(rootReducer, initialState, applyMiddleware(...middlewares));
    }

    return store;
  },
};

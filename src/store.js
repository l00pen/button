import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from './middleware/redux-thunk';

import buttonSimpleReducer from './reducers/buttonSimpleReducer';
import buttonCSSReducer from './reducers/buttonCSSReducer';
import buttonJSReducer from './reducers/buttonJSReducer';

const rootReducer = combineReducers({
  button: buttonSimpleReducer,
  buttonCSS: buttonCSSReducer,
  buttonJS: buttonJSReducer,
});

const middlewares = [thunk];

let store;

const INITIAL_STATE = {
  button: {},
  buttonCSS: {},
  buttonJS: {},
};

export default {
  get(initialState = INITIAL_STATE) {
    if (!store) {
      store = createStore(rootReducer, initialState, applyMiddleware(...middlewares));
    }

    return store;
  },
};

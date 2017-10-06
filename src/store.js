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

export default {
  get(initialState = {}) {
    if (!store) {
      store = createStore(rootReducer, initialState, applyMiddleware(...middlewares));
    }

    return store;
  },
};

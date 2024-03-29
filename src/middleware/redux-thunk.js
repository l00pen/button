/* eslint-disable */
const thunkMiddleware = ({ dispatch, getState }) => (next) => (action) => {
  return typeof action === 'function'
    ? action(dispatch, getState)
    : next(action);
};

export default thunkMiddleware;
/* eslint-enable */

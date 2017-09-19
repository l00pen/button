const initialState = {
  circleRotation: 0,
};

export default function actionButtonAnimation(state = initialState, action) {
  switch (action.type) {
    case 'TICK':
      return Object.assign({}, state, action.data);
    default:
      return state;
  }
}

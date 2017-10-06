export function buttonSimpleClickHandlerLoading() {
  return {
    type: 'BUTTON_SIMPLE_CLICK_LOADING',
  };
}

export function buttonSimpleClickHandlerSuccess() {
  return {
    type: 'BUTTON_SIMPLE_CLICK_SUCCESS',
  };
}

export function buttonSimpleClickHandlerError() {
  return {
    type: 'BUTTON_SIMPLE_CLICK_ERROR',
  };
}

export function buttonSimpleClickHandler() {
  return (dispatch) => {
    dispatch(buttonSimpleClickHandlerLoading());
    return Promise.resolve().then(
      () => dispatch(buttonSimpleClickHandlerSuccess()),
      () => dispatch(buttonSimpleClickHandlerError()),
    );
  };
}

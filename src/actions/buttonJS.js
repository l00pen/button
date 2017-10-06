export function buttonJSClickHandlerLoading() {
  return {
    type: 'BUTTON_JS_CLICK_LOADING',
  };
}

export function buttonJSClickHandlerSuccess() {
  return {
    type: 'BUTTON_JS_CLICK_SUCCESS',
  };
}

export function buttonJSClickHandlerError() {
  return {
    type: 'BUTTON_JS_CLICK_ERROR',
  };
}

export function buttonJSClickHandler() {
  return (dispatch) => {
    dispatch(buttonJSClickHandlerLoading());
    return Promise.resolve().then(
      () => dispatch(buttonJSClickHandlerSuccess()),
      () => dispatch(buttonJSClickHandlerError()),
    );
  };
}

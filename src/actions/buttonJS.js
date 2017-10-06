const SUCCESS_ANIMATION_LENGTH = 2000;

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

export function buttonJSResetSuccess() {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({
        type: 'BUTTON_JS_SUCCESS_RESET',
      });
    }, SUCCESS_ANIMATION_LENGTH);
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
    setTimeout(() => {
      Promise.resolve().then(
        () => {
          dispatch(buttonJSClickHandlerSuccess());
          dispatch(buttonJSResetSuccess());
        },
        () => dispatch(buttonJSClickHandlerError()),
      );
    }, 2000);
  };
}

const SUCCESS_ANIMATION_LENGTH = 2000;

export function buttonCSSClickHandlerLoading() {
  return {
    type: 'BUTTON_CSS_CLICK_LOADING',
  };
}

export function buttonCSSClickHandlerSuccess() {
  return {
    type: 'BUTTON_CSS_CLICK_SUCCESS',
  };
}

export function buttonCSSClickHandlerError() {
  return {
    type: 'BUTTON_CSS_CLICK_ERROR',
  };
}

export function buttonCSSResetSuccess() {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({
        type: 'BUTTON_CSS_SUCCESS_RESET',
      });
    }, SUCCESS_ANIMATION_LENGTH);
  };
}

export function buttonCSSClickHandler() {
  return (dispatch) => {
    dispatch(buttonCSSClickHandlerLoading());
    setTimeout(() => {
      Promise.resolve().then(
        () => {
          dispatch(buttonCSSClickHandlerSuccess());
          dispatch(buttonCSSResetSuccess());
        },
        () => dispatch(buttonCSSClickHandlerError()),
      );
    }, 2000);
  };
}

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

export function buttonCSSClickHandler() {
  return (dispatch) => {
    dispatch(buttonCSSClickHandlerLoading());
    setTimeout(() => {
      Promise.resolve().then(
        () => dispatch(buttonCSSClickHandlerSuccess()),
        () => dispatch(buttonCSSClickHandlerError()),
      );
    }, 2000);
  };
}

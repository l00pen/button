const initialState = {
  label: 'Click me!',
  loading: false,
  success: false,
  error: {},
};

export default function buttonCSSReducer(state = initialState, action) {
  switch (action.type) {
    case 'BUTTON_CSS_CLICK_LOADING':
      return {
        ...state,
        loading: true,
      };
    case 'BUTTON_CSS_CLICK_SUCCESS':
      return {
        ...state,
        loading: false,
        success: true,
      };
    case 'BUTTON_CSS_SUCCESS_RESET':
      return {
        ...state,
        success: false,
      };
    case 'BUTTON_CSS_CLICK_ERROR':
      return {
        ...state,
        loading: false,
        error: { status: 500 },
      };
    default:
      return state;
  }
}

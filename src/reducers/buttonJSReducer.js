const initialState = {
  label: 'Click me!',
  loading: false,
  success: false,
  error: {},
};

export default function buttonJSReducer(state = initialState, action) {
  switch (action.type) {
    case 'BUTTON_JS_CLICK_LOADING':
      return {
        ...state,
        loading: true,
      };
    case 'BUTTON_JS_CLICK_SUCCESS':
      return {
        ...state,
        loading: false,
        success: true,
      };
    case 'BUTTON_JS_CLICK_ERROR':
      return {
        ...state,
        loading: false,
        error: { status: 500 },
      };
    default:
      return state;
  }
}

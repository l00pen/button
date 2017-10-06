const initialState = {
  label: 'Click me!',
  loading: false,
  success: false,
  error: {},
};

export default function buttonSimpleReducer(state = initialState, action) {
  switch (action.type) {
    case 'BUTTON_SIMPLE_CLICK_LOADING':
      return {
        ...state,
        label: 'Loading...',
        loading: true,
      };
    case 'BUTTON_SIMPLE_CLICK_SUCCESS':
      return {
        ...state,
        label: 'Click me!',
        loading: false,
        success: true,
      };
    case 'BUTTON_SIMPLE_CLICK_ERROR':
      return {
        ...state,
        loading: false,
        error: { status: 500 },
      };
    default:
      return state;
  }
}

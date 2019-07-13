export const initialResponse = { response: null, error: null, loading: false };

export const actions = {
  start: 'started',
  success: 'success',
  fail: 'fail'
};

export function responseReducer(state, action) {
  switch (action.type) {
    case actions.start:
      return { response: null, error: null, loading: true };
    case actions.success:
      return { response: action.payload, error: null, loading: false };
    case actions.fail:
      return { response: null, error: action.payload, loading: false };
    default:
      throw new Error(`Hook reducer. Unexpected action type: ${action.type}`);
  }
}

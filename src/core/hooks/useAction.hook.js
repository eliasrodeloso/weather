import { useEffect, useReducer } from 'react';
import { initialResponse, responseReducer, actions } from './reducer.hook';

/**
 * Use async action hook: performs async actions.
 *
 * @param {function} action Async action to be executed
 * @param {string} query to be send in the request
 * @param {object} query to be send in the request
 * @returns {object} state an object of
 * @returns {boolean} state.loading
 * @returns {object} state.response
 * @returns {object} retults.error
 */
function useAsyncAction(action, query) {
  const [state, dispatch] = useReducer(responseReducer, initialResponse);
  useEffect(() => {
    if (!query) return;
    dispatch({ type: actions.start });
    action(query)
      .then((response) => {
        dispatch({ type: actions.success, payload: response });
      })
      .catch(error => dispatch({ type: actions.fail, payload: error }));
  }, [action, query]);
  return state;
}

export default useAsyncAction;

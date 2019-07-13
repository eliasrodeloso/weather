import { useEffect, useReducer } from 'react';
import { initialResponse, responseReducer, actions } from './reducer.hook';

/**
 * Use async action hook: performs async actions.
 *
 * @param {function} action Async action to be executed
 * @param {string} query to be send in the request
 * @returns {object} results an object of
 * @returns {boolean} results.loading
 * @returns {object} results.response
 * @returns {object} retults.error
 */
function useAsyncAction(action, query) {
  const [results, dispatch] = useReducer(responseReducer, initialResponse);
  useEffect(() => {
    dispatch({ type: actions.start });
    action(query)
      .then((response) => {
        dispatch({ type: actions.success, payload: response });
      })
      .catch(error => dispatch({ type: actions.fail, payload: error }));
  }, [action, query]);
  return results;
}

export default useAsyncAction;

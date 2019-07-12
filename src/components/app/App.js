import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Router from '../../config/routes.config';
import reducers from '../../core/reducers';

let store;

const createDevStoreWithMiddleware = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ // eslint-disable-line
    ? window.__REDUX_DEVTOOLS_EXTENSION__() // eslint-disable-line
    : f => f
)(createStore);

const createStoreWithMiddleware = compose(applyMiddleware(thunk))(createStore);

if (process.env.NODE_ENV === 'development') {
  store = createDevStoreWithMiddleware(reducers);
} else {
  store = createStoreWithMiddleware(reducers);
}

function App() {
  return (
    <ReduxProvider store={store}>
      <Router />
    </ReduxProvider>
  );
}

export default App;

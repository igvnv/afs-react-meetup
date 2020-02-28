import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';

import App from './App';
import reducer from './store/reducer';

import './index.css';

const cachedState = localStorage.getItem('state');

const store = createStore(
  reducer,
  cachedState ? JSON.parse(cachedState) : undefined
);

store.subscribe(() => {
  localStorage.setItem('state', JSON.stringify(store.getState()));
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

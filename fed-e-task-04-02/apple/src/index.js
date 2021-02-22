import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import apple from './store/AppleStore'
import { Provider } from 'mobx-react'

ReactDOM.render(
  <Provider apple={apple}>
    <App />
  </Provider>,
  document.getElementById('root')
);

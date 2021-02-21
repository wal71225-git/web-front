import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import todo from './store/TodoStore'
import { Provider }from 'mobx-react'

ReactDOM.render(
  <Provider todo= {todo}>
    <App />
  </Provider>,
  document.getElementById('root')
);


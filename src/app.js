import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Greet from './components/Greet';
import './app.scss';
import { store } from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <Greet />
  </Provider>,
  document.getElementById('root')
);

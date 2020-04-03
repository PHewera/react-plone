import React from 'react';
import ReactDOM from 'react-dom';
import Theme from './theme/components/theme';
import './theme/style/index.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Theme />
  </React.StrictMode>,
  document.getElementById('outer-wrapper')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

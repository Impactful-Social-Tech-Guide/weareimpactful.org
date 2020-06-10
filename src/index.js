import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './css/bootstrap.css';
import './fonts/CircularStd-Black.otf'
import './fonts/CircularStd-BlackItalic.otf'
import './fonts/CircularStd-Bold.otf'
import './fonts/CircularStd-BoldItalic.otf'
import './fonts/CircularStd-Book.otf'
import './fonts/CircularStd-BookItalic.otf'
import './fonts/CircularStd-Medium.otf'
import './fonts/CircularStd-MediumItalic.otf'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

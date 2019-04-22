import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import reduxStoreData from './redux'
import { PersistGate } from 'redux-persist/integration/react'

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }
ReactDOM.render(
<Provider store={reduxStoreData.store}>
<PersistGate loading={null} persistor={reduxStoreData.persistor}>
  <App />
  </PersistGate>
  </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

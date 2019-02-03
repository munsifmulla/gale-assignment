import React from 'react';
import ReactDOM from 'react-dom';
import './styles/style.scss';
import App from './App';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import CartReducer from './reducers/reducer'

const store = createStore(CartReducer)

ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>
, document.getElementById('root'));


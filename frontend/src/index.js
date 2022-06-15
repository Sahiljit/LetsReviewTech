import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import 'quill/dist/quill.snow.css';
import App from './App';

//REDUX
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import reducers from './redux/reducers'
import { composeWithDevTools } from 'redux-devtools-extension'


  const userInfoFromStorage = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null

  

  const initialState = {
 
    userLogin: { userInfo: userInfoFromStorage },
  }


const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(thunk)))
// const store = createStore(reducers,  composeWithDevTools(applyMiddleware(thunk)))





ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);



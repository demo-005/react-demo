import React from 'react';
import ReactDOM from 'react-dom';
import LoginControl from "./conpontents/LoginControl"
import {HashRouter,Route,Switch } from "react-router-dom"
import Register from './containers/register/Register';
import Login from './containers/login/Login';
import Main from './containers/main/Main';

ReactDOM.render(
  <LoginControl/>,
  document.getElementById('root')
);


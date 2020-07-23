import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter,Route,Switch } from "react-router-dom"
import Register from './containers/register/Register';
import Login from './containers/login/Login';
import Main from './containers/main/Main';

ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route path="/register/:id" component={Register}></Route>
      <Route path="/login" component={Login}></Route>
      <Route path="/"  component={Main}></Route>
    </Switch>
  </HashRouter>,
  document.getElementById('root')
);


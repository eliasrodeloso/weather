import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../components/pages/home/Home.page';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={HomePage} exact />
    </Switch>
  </BrowserRouter>
);

export default Router;

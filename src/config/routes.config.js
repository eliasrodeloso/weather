import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePageContainer from '../containers/Home.container';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={HomePageContainer} exact />
    </Switch>
  </BrowserRouter>
);

export default Router;

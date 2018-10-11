import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Library from '../pages/library';
import Search from '../pages/search';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Library} />
    <Route path="/search" component={Search} />
  </Switch>
);

export default Routes;

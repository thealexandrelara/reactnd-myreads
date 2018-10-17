import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Library from '../pages/library';
import BookDetails from '../pages/bookDetails';
import Search from '../pages/search';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Library} />
    <Route path="/book/:id" component={BookDetails} />
    <Route path="/search" component={Search} />
  </Switch>
);

export default Routes;

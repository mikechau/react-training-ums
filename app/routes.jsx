import React from 'react';
import { Route, DefaultRoute, RouteHandler, Redirect } from 'react-router';

import App from './components/layouts/App';
import Home from './components/pages/HomePage';

const routes = (
  <Route name='app' handler={App} path='/?'>
  </Route>
);

export default routes;

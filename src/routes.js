import React from 'react';
import { browserHistory, Redirect, Route, Router } from 'react-router';

import App from './components/App'
import Permissions from './components/Permissions'

export default (
  <Router history={browserHistory}>
    <Route component={App} >
        <Route path='/permissions' component={Permissions} />
        <Redirect from="/" to="permissions  " />
    </Route>
  </Router>
)

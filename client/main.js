import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, hashHistory, IndexRoute, IndexLink } from 'react-router'


///////////////////////////////////
// Imported React components
import Start from './components/Start';
import Login from './components/Login';
import Signup from './components/Signup';
import Feed from './components/Feed';
import Browse from './components/Browse';
import Requested from './components/Requested';

render((
  <Router history={browserHistory}>
    <Route path="/" component={Start}>
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
    </Route>
    <Route path="/feed" component={Feed}>
      <Route path="/browse" component={Browse} />
      <Route path="/requested" component={Requested} />
    </Route>
  </Router>
), document.getElementById('app'))
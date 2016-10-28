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
// Don't forget to import components!!'

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
    <Route path="/account" component={Account}>
      <Route path="/upload" component={Upload} />
      <Route path="/makeRequest" component={MakeRequest} />
      <Route path="/wishlist" component={Wishlist} />
    </Route>
  </Router>
), document.getElementById('app'))
import React, {Component}  from 'react';
import { Router, Route, IndexRedirect, hashHistory } from 'react-router';

import Layout from './pages/layout';
import Home from './pages/home';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router history={hashHistory}>
            <Route path="/" component={Layout}>
                <IndexRedirect to="/home" />
                <Route path="home" component={Home} />
            </Route>
        </Router>
      </div>
    );
  }
}
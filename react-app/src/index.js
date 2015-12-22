import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, IndexRedirect} from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/stickey-footer.css';

import TopLevel from './components/navi/TopLevel.js'
import SecondLevel from './components/navi/SecondLevel.js'
import BookIndexPage from './components/BookIndexPage.js'
import S1 from './components/S1.js';
import S2 from './components/S2.js';

/**
 * Structure of menu/pages.
 */
ReactDOM.render(
    <Router history={createBrowserHistory()}>
      <Route name="TOP" path="/" component={TopLevel}>
        <IndexRedirect from="*" to="book" />
        <Route path="book" name="Book" component={SecondLevel}>
          <IndexRoute component={BookIndexPage} />
          <Route path="s1" name="S1" component={S1}>
          </Route>
        </Route>
        <Route path="p1" name="P1" component={SecondLevel}>
          <IndexRedirect from="*" to="s1"/>
          <Route path="s1" name="S1" component={S1} />
          <Route path="s2" name="S2" component={S2} />
        </Route>
        <Route path="s1" name="S1" component={S1} />
        <Route path="s2" name="S2" component={S2} />
      </Route>
    </Router>
  , document.getElementById('root'));

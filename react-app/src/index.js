import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, IndexRedirect} from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import P1 from './components/P1.js';
import S1 from './components/S1.js';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/stickey-footer.css';

import App from './components/App.js'
import BookPage from './components/BookPage.js'
import BookListPage from './components/BookListPage.js'

/**
 * Page structure.
 */
ReactDOM.render(
    <Router history={createBrowserHistory()}>
      <Route path="/" component={App}>
        <IndexRedirect from="*" to="book"/>
        <Route path="book" name="BookPage" component={BookPage}>
          <IndexRedirect from="*" to="list"/>
          <Route path="list" name="BookListPage" component={BookListPage}>
          </Route>
        </Route>
        <Route path="p1" name="P1" component={P1}>
          <IndexRedirect from="*" to="s1"/>
          <Route path="s1" name="S1" component={S1}>
          </Route>
        </Route>
      </Route>
    </Router>
  , document.getElementById('root'));

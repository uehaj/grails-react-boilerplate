import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, IndexRedirect} from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/stickey-footer.css';

import App from './components/App.js'
import SecondLevel from './components/SecondLevel.js'
import BookListPage from './components/BookListPage.js'
import S1 from './components/S1.js';
import S2 from './components/S2.js';

/**
 * Page structure.
 */
ReactDOM.render(
    <Router history={createBrowserHistory()}>
      <Route name="TOP" path="/" component={App}>
        <IndexRedirect from="*" to="book" />
        <Route path="book" name="Book" component={SecondLevel}>
          <IndexRedirect from="*" to="index" />
          <Route path="index" name="Index" component={BookListPage}>
    {/*
          <Route path="new" name="New" component={BookNewPage}>
          <Route path="delete" name="Delege" component={BookDeletePage}>
          <Route path="edit" name="Edit" component={BookEditPage}>
     */}
          </Route>
        </Route>
        <Route path="p1" name="P1" component={SecondLevel}>
          <IndexRedirect from="*" to="s1"/>
          <Route path="s1" name="S1" component={S1}>
          </Route>
          <Route path="s2" name="S2" component={S2}>
          </Route>
        </Route>
      </Route>
    </Router>
  , document.getElementById('root'));

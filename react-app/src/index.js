import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, IndexRedirect} from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/stickey-footer.css';
import 'bootstrap';

import {TopLevel,SecondLevel,NotFound} from './components/navi/navi'
import BookIndexPage from './components/BookIndexPage'
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import Page4 from './components/Page4';
import Page5 from './components/Page5';

/**
 * Structure of menu/pages.
 */
ReactDOM.render(
    <Router history={createBrowserHistory()}>
      <Route name="TOP" path="/" component={TopLevel}>
        <IndexRedirect from="*" to="book" />
        <Route path="book" name="booktable" component={SecondLevel}>
          <IndexRedirect from="*" to="list" />
          <Route path="list" name="list" component={BookIndexPage} />
          <Route path="p1" name="page1" component={Page1} />
          <Route path="p2" name="page2" component={Page2} />
          <Route path="p3" name="page3" component={Page2} />
        </Route>
        <Route path="m1" name="MenuItem1" component={SecondLevel}>
          <IndexRedirect from="*" to="p1" />
          <Route path="p1" name="page1" component={Page1} />
          <Route path="p2" name="page2" component={Page2} />
          <Route path="p3" name="page3" component={Page2} />
        </Route>
        <Route path="m2" name="MenuItem2" component={SecondLevel}>
          <IndexRedirect from="*" to="p4" />
          <Route path="p4" name="page4" component={Page4} />
          <Route path="p5" name="page2" component={Page5} />
        </Route>
        <Route path="p1" name="page1" component={Page1} />
      </Route>
      <Route path="*" component={NotFound}/>
    </Router>
  , document.getElementById('root'));

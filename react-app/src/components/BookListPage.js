import React, { Component } from 'react';
import { CollapsibleNav, Navbar, NavBrand, Nav, NavItem, NavDropdown, MenuItem,
         Grid, Row, Col, Modal, Button, Well } from 'react-bootstrap';
import * as ajax from '../ajax';
import { LinkContainer } from 'react-router-bootstrap';
import Breadcrumbs from 'react-breadcrumbs';

import BookList from './BookList.js'

export default class BookListPage extends Component {
  render() {
    return (
      <div>
        <BookList />
      </div>
    );
  }
}

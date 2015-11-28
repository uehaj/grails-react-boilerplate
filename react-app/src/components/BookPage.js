import React, { Component } from 'react';
import { CollapsibleNav, Navbar, NavBrand, Nav, NavItem, NavDropdown, MenuItem,
         Grid, Row, Col, Modal, Button, Well } from 'react-bootstrap';
import { Navigation } from 'react-router';
import SecondLevelNavbar from './SecondLevelNavbar.js'

export default class BookPage extends Component {
  render() {
    return (
      <div>
        {/* Generate second level menu(NavBar). */}
        <SecondLevelNavbar route={this.props.route} />
        {/* Page content. */}
        <div style={{marginTop:60}}>
        {this.props.children}
        </div>
      </div>
    );
  }
}

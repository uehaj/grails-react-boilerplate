import React, { Component } from 'react';
import { CollapsibleNav, Navbar, NavBrand, Nav, NavItem, NavDropdown, MenuItem,
         Grid, Row, Col, Modal, Button, Well } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

/**
 * Application top level structure.
 *
 * +-TopLevel--------------+
 * | TopLevelNavbar        |
 * | +-SecondLevel-------+ |
 * | | SecondLevelNavBar | |
 * | | {childlen}        | |
 * | +-------------------+ |
 * | footer                |
 * +-----------------------+
 *
 */
export default class TopLevel extends Component {
  render() {
    return (
      <div>
        {/* Top level menu(Navbar)*/}
        <TopLevelNavbar route={this.props.route} />
        {this.props.children}
        <footer className="footer">
          <div className="container">
            <p className="text-muted">Place sticky footer content here.</p>
          </div>
        </footer>
      </div>
    );
  }
}

/**
 * Top level menu navbar.
 */
class TopLevelNavbar extends Component {
  render() {
    return (
        <Navbar fixedTop>
          <Navbar.Header>
            <Navbar.Brand><a href="#">React/Grails Boilerplate</a></Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              {/* Generate top level Navbar menu items from router. */}
              {this.props.route.childRoutes.map((item)=>{
                return (
                  <LinkContainer key={item.path} to={"/"+item.path}>
                    <NavItem>{item.name}</NavItem>
                  </LinkContainer>);
              })}
            </Nav>
            {/* Right side drop down menu items. */}
            <Nav pullRight>
              <NavDropdown eventKey={1} title="Dropdown" id="collapsible-nav-dropdown">
                <MenuItem eventKey={1.1} href="/">TOP</MenuItem>
                <MenuItem eventKey={1.2} href="/changepassword">Change Password</MenuItem>
                <MenuItem eventKey={1.3} href="/logout">Logout</MenuItem>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    );
  }
}

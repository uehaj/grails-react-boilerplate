import React, { Component } from 'react';
import { CollapsibleNav, Navbar, NavBrand, Nav, NavItem, NavDropdown, MenuItem,
         Grid, Row, Col, Modal, Button, Well } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

/**
 * Application top level structure.
 */
export default class App extends Component {
  render() {
    return (
      <div>
        {/* Top level menu(NavBar)*/}
        <AppLevelNavbar route={this.props.route} />
        {/* Page content */}
        {this.props.children}
        {/* Footer */}
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
 * Application level (toplevel) navbar.
 */
class AppLevelNavbar extends Component {
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
                <MenuItem eventKey={1.1} href="#">TOP</MenuItem>
                <MenuItem eventKey={1.2} href="#">Change Password</MenuItem>
                <MenuItem eventKey={1.3} href="#">Logout</MenuItem>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    );
  }
}


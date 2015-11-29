import React, { Component } from 'react';
import { CollapsibleNav, Navbar, NavBrand, Nav, NavItem, NavDropdown, MenuItem,
         Grid, Row, Col, Modal, Button, Well } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default class SecondLevel extends Component {
  render() {
    return (
      <div>
        {/* Generate second level menu(NavBar). */}
        <SecondLevelNavbar route={this.props.route} />
        {/* Page content. */}
        <div style={{marginTop:60, paddingTop: 40}}>
        {this.props.children}
        </div>
      </div>
    );
  }
}

class SecondLevelNavbar extends Component {
  render() {
    console.log(this.props.route)
    return (
      <Navbar inverse style={{position:'fixed', marginTop:-9, zIndex:1, width:'100%', marginBottom: 0}}>
        <Nav navbar>
        { (this.props.route.childRoutes ? this.props.route.childRoutes : []).map((item)=>{
            return (
              <LinkContainer key={item.name} to={'/'+this.props.route.path+'/'+item.path}>
               <NavItem>{item.name}</NavItem>
             </LinkContainer>
            );
          })
        }
        </Nav>
      </Navbar>
    );
  }
}

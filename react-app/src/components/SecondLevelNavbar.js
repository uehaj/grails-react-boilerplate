import React, { Component } from 'react';
import { CollapsibleNav, Navbar, NavBrand, Nav, NavItem, NavDropdown, MenuItem,
         Grid, Row, Col, Modal, Button, Well } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default class SecondLevelNavbar extends Component {
  render() {
    return (
      <Navbar inverse style={{position:'fixed', marginTop: -60, zIndex:1, width:'100%', marginBottom: 0}}>
        <Nav navbar>
          {this.props.route.childRoutes.map((item)=>{
            return <LinkContainer key={item.path} to={'/'+this.props.route.path+'/'+item.path.replace(/\(.*/, '')}>
              <NavItem>{item.name}</NavItem>
            </LinkContainer>
          })}
        </Nav>
      </Navbar>
    );
  }
}
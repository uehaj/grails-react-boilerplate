import React, { Component } from 'react';
import { CollapsibleNav, Navbar, NavBrand, Nav, NavItem, NavDropdown, MenuItem,
         Grid, Row, Col, Modal, Button, Well } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default class TopLevelNavbar extends Component {
  render() {
    return (
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand><a href="#">React-Billing</a></Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              {/*画面最上行のメニュー(NavBar)の項目をルーティング情報から生成*/}
              {this.props.route.childRoutes.map((item)=>{
                return (
                  <LinkContainer to={"/"+item.path}>
                    <NavItem>{item.name}</NavItem>
                  </LinkContainer>);
              })}
            </Nav>
            {/* 画面最上行のメニュー(NavBar)の右端部分のドロップダウンメニュー*/}
            <Nav pullRight>
              <NavDropdown eventKey={1} title="Dropdown" id="collapsible-nav-dropdown">
                <MenuItem eventKey={1.1} href="#">TOPへ</MenuItem>
                <MenuItem eventKey={1.2} href="#">パスワード変更</MenuItem>
                <MenuItem eventKey={1.3} href="#">ログアウト</MenuItem>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    );
  }
}

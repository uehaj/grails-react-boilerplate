import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import { CollapsibleNav, Navbar, NavBrand, Nav, NavItem, NavDropdown, MenuItem,
         Grid, Row, Col, Modal, Button, Well } from 'react-bootstrap';
import 'react-bootstrap-table/css/react-bootstrap-table-all.min.css';

import * as ajax from '../ajax'

/**
 * Show Book Domain class.
 */
export default class BookShow extends Component {
  constructor(props) {
    super(props);
    this.state = { book:null, showModal: false };
  }
  componentDidMount() {
    console.log(this.props.targetId);
    if (this.props.targetId) {
      ajax.getBook(this.props.targetId, (data) => {
        this.setState({ book: data });
      })
    }
  }
  close() {
    this.setState({ showModal: false });
  }
  open() {
    this.setState({ showModal: true });
  }
  render() {
    return (
        <div>
          <h1>Book {this.props.targetId}</h1>
          {this.state.book == null ? "null" : this.state.book.toString()}
          <Button onClick={this.open.bind(this)}>Open</Button>
          <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
            <Modal.Header>
              <Modal.Title>Title</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              One fine body...
            </Modal.Body>

            <Modal.Footer>
              <Button onClick={this.close.bind(this)}>Close</Button>
              <Button bsStyle="primary">Save</Button>
            </Modal.Footer>
          </Modal>
        </div>);
  }
}

import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import { CollapsibleNav, Navbar, NavBrand, Nav, NavItem, NavDropdown, MenuItem,
         Grid, Row, Col, Modal, Button, Well } from 'react-bootstrap';
import 'react-bootstrap-table/css/react-bootstrap-table-all.min.css';
import ModalDialog from './ModalDialog';
import * as ajax from '../ajax';

/**
 * Show Book Domain class on a modal dialog.
 */
export default class BookShowDialog extends Component {
  constructor(props) {
    super(props);
    this.state = { book:this.props.book };
  }
  componentDidMount() {
    if (this.props.selectedBookId) {
      ajax.getBook(this.props.selectedBookId, (data) => {
        this.setState({ book: data });
      })
    }
  }
  render() {
    console.log(this.props)
    return (
      <ModalDialog show={this.props.selectedBookId != null} close={this.props.close}>
        <div>This is body</div>
      </ModalDialog>
    );
  }
}

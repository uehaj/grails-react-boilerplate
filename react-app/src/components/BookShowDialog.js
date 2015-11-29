import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import { CollapsibleNav, Navbar, NavBrand, Nav, NavItem, NavDropdown, MenuItem,
         Grid, Row, Col, Modal, Button, Well } from 'react-bootstrap';
import {FormControls} from 'react-bootstrap';
import 'react-bootstrap-table/css/react-bootstrap-table-all.min.css';

import ModalDialog from './ModalDialog';
import * as ajax from '../ajax';

/**
 * Show Book Domain class on a modal dialog.
 */
export default class BookShowDialog extends Component {
  constructor(props) {
    super(props);
    this.state = { book:null };
  }
  componentDidMount() {
    if (this.props.selectedBookId) {
      ajax.getBook(this.props.selectedBookId, (data) => {
        this.setState({ book: data });
      })
    }
  }
  render() {
    if (!this.state.book) {
      return <div />
    }
    return (
      <ModalDialog title='契約情報' show={this.props.selectedBookId != null} close={this.props.close}>
        <form className="form-horizontal">
        <FormControls.Static label="Title:" labelClassName="key col-xs-2" wrapperClassName="col-xs-10" value={this.state.book.title} />
        <FormControls.Static label="Price:" labelClassName="key col-xs-2" wrapperClassName="col-xs-10" value={this.state.book.price} />
        </form>
      </ModalDialog>
    );
  }
}

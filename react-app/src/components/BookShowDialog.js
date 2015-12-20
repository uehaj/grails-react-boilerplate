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

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedBookId) {
      ajax.getBook(nextProps.selectedBookId, (data) => {
        console.log(data)
        this.setState({ book: data });
      })
    }
  }

  render() {
    return (
      <ModalDialog title={this.state.book ? this.state.book.title : 'loading..'}
                   show={this.props.show}
                   close={this.props.close}
                   additionalButton={<span><Button bsStyle="success" onClick={this.props.editButtonAction}>Edit</Button></span>}>
        <form className="form-horizontal">
          <FormControls.Static label="Title:" labelClassName="key col-xs-2" wrapperClassName="col-xs-10" value={this.state.book ? this.state.book.title : 'loading..'} />
          <FormControls.Static label="Price:" labelClassName="key col-xs-2" wrapperClassName="col-xs-10" value={this.state.book ? this.state.book.price : 'loading..'} />
        </form>
      </ModalDialog>
    );
  }
}

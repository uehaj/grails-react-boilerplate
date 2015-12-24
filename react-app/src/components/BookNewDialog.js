import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import { CollapsibleNav, Navbar, NavBrand, Nav, NavItem, NavDropdown, MenuItem,
         Grid, Row, Col, Modal, Button, Well, Input } from 'react-bootstrap';
import {FormControls} from 'react-bootstrap';
import 'react-bootstrap-table/css/react-bootstrap-table-all.min.css';
import ModalDialog from './ModalDialog';
import * as ajax from '../ajax';

/**
 * Form for create Book Domain class on a modal dialog.
 */
export default class BookNewDialog extends Component {
  constructor(props) {
    super(props);
    this.state = { book:null };
  }

  callbackSubmitButtonAction() {
    this.props.submitButtonAction({
      title: this.refs.title.getValue(),
      price: this.refs.price.getValue()
    })
  }

  render() {
    return (
      <ModalDialog title="New Book"
                   show={this.props.show}
                   close={this.props.close}
                   additionalButton={<Button bsStyle="success" onClick={this.callbackSubmitButtonAction.bind(this)}>Create</Button>}>
        <form ref='form' className="form-horizontal">
          <Input ref="title" type="text" label="Title:" labelClassName="key col-xs-2" wrapperClassName="col-xs-10" defaultValue={this.state.book && this.state.book.title} />
          <Input ref="price" type="text" label="Price:" labelClassName="key col-xs-2" wrapperClassName="col-xs-10" defaultValue={this.state.book && this.state.book.price} />
        </form>
      </ModalDialog>
    );
  }
}

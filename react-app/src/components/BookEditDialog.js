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
 * Form for edit existing Book Domain class on a modal dialog.
 */
export default class BookEditDialog extends Component {
  constructor(props) {
    super(props);
    this.state = { book:null };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedBookId) {
      ajax.getBook(nextProps.selectedBookId, (data) => {
        this.setState({ book: data });
      })
    }
  }

  callbackSubmitButtonAction() {
    this.props.submitButtonAction({
      title: this.refs.title.getValue(),
      price: this.refs.price.getValue()
    })
  }

  render() {
    return (
      <ModalDialog title={'Edit: ' + (this.state.book && this.state.book.title)}
                   show={this.props.show}
                   close={this.props.close}
                   additionalButton={<Button bsStyle="success" onClick={this.callbackSubmitButtonAction.bind(this)}>Update</Button>}>
        <form ref='form' className="form-horizontal">
          <Input ref="title" type="text" label="Title:" labelClassName="key col-xs-2" wrapperClassName="col-xs-10" defaultValue={this.state.book && this.state.book.title} />
          <Input ref="price" type="text" label="Price:" labelClassName="key col-xs-2" wrapperClassName="col-xs-10" defaultValue={this.state.book && this.state.book.price} />
        </form>
      </ModalDialog>
    );
  }
}

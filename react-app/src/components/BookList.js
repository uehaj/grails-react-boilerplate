import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { CollapsibleNav, Navbar, NavBrand, Nav, NavItem, NavDropdown, MenuItem,
         Grid, Row, Col, Modal, Button, Well } from 'react-bootstrap';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { History } from 'react-router';
import 'react-bootstrap-table/css/react-bootstrap-table-all.min.css';

import BookNewDialog from './BookNewDialog';
import BookShowDialog from './BookShowDialog';
import BookFormDialog from './BookFormDialog';
import ModalDialog from './ModalDialog';
import * as ajax from '../ajax';

/**
 * List Book Domain class instances.
 */
export default class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = { bookList:[],
                   selectedBookId:null,
                   showNewDialog:false,
                   showShowDialog:false,
                   showEditDialog:false,
                   showErrorDialog:false,
                   errorMessage:''};
  }
  reloadData() {
    ajax.getBooks((data) => {
      this.setState({ bookList: data });
    })
  }
  componentDidMount() {
    ajax.getBooks((data) => {
      this.setState({ bookList: data });
    })
  }
  handleRowClicked(row) {
    this.setState({ selectedBookId: row.id,
                    showShowDialog: true});
  }
  showFormDialog() {
    this.setState({ showFormDialog: true,
                    showShowDialog: false});
  }
  createBook(creatingBook) {
    this.setState({showNewDialog: false})
    ajax.createBook(creatingBook, (_)=>{
      this.reloadData()
    }, (err)=>{
      this.setState({errorMessage: err,
                     showErrorDialog: true})
    })
  }
  updateBook(updatedBook) {
    this.setState({showFormDialog: false})
    ajax.updateBook(this.state.selectedBookId, updatedBook, ()=>{
      // Locally update data.
      this.setState({bookList: this.state.bookList.map((book)=>(book.id === this.state.selectedBookId) ?
                                                       {id:this.state.selectedBookId, ...updatedBook} : book) })
    }, (err)=>{
      this.setState({errorMessage: err,
                     showErrorDialog: true})
    })
  }
  deleteBook(rowKeys) {
    rowKeys.forEach((it)=>{
      ajax.deleteBook(it, ()=>{
        this.reloadData()
      }, (err)=>{
        this.setState({errorMessage: err,
                       showErrorDialog: true})
      })
    })
  }
  render() {
    return (<div>
              <h1>Books</h1>
              <Button onClick={()=>this.setState({showNewDialog:true})}>New</Button>
              <BootstrapTable data={this.state.bookList}
                              height="430"
                              hover condensed pagination deleteRow
                              selectRow={{
                                  mode: 'checkbox',
                                  bgColor: "rgb(238, 193, 213)",
                              }}
                              options={{
                                  onRowClick: this.handleRowClicked.bind(this),
                                  afterDeleteRow: this.deleteBook.bind(this)
                              }}
                              >
                <TableHeaderColumn dataField="id" dataSort={true} isKey={true} width="150">ID</TableHeaderColumn>
                <TableHeaderColumn dataField="title" dataSort={true}>Title</TableHeaderColumn>
                <TableHeaderColumn dataField="price" dataSort={true}>Price</TableHeaderColumn>
              </BootstrapTable>
              <BookNewDialog show={this.state.showNewDialog}
                             close={()=>this.setState({showNewDialog:false})}
                             submitButtonAction={this.createBook.bind(this)}/>
              <BookShowDialog show={this.state.showShowDialog}
                              selectedBookId={this.state.selectedBookId}
                              close={()=>this.setState({showShowDialog:false})}
                              editButtonAction={this.showFormDialog.bind(this)}/>
              <BookFormDialog show={this.state.showFormDialog}
                              selectedBookId={this.state.selectedBookId}
                              close={()=>this.setState({showFormDialog:false})}
                              submitButtonAction={this.updateBook.bind(this)}/>
              <ModalDialog title="Error"
                           show={this.state.showErrorDialog}
                           close={()=>this.setState({showErrorDialog:false})}>
                <div>{this.state.errorMessage}</div>
              </ModalDialog>

           </div>);
  }
}

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { History } from 'react-router';
import 'react-bootstrap-table/css/react-bootstrap-table-all.min.css';
import 'bootstrap';

import BookShowDialog from './BookShowDialog';
import BookFormDialog from './BookFormDialog';
import * as ajax from '../ajax';

/**
 * List Book Domain class instances.
 */
export default class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = { bookList:[],
                   page:1,
                   sizePerPage:10,
                   showShowDialog:false,
                   showEditDialog:false,
                   selectedBookId:null };
  }
  componentDidMount() {
    ajax.getBooks((data) => {
      this.setState({ bookList: data });
    })
  }
  handlePageChange(page, sizePerPage) {
    this.setState({ page: page, sizePerPage: sizePerPage })
  }
  handleRowClicked(row) {
    this.setState({ selectedBookId: row.id,
                    showShowDialog: true});
  }
  showFormDialog() {
    this.setState({ showFormDialog: true,
                    showShowDialog: false});
  }
  updateBook(newBook) {
    ajax.updateBook(this.state.selectedBookId, newBook, ()=>{
      // Locally update data.
      this.setState({bookList: this.state.bookList.map((book)=>(book.id === this.state.selectedBookId) ?
                                                       {id:this.state.selectedBookId, ...newBook} : book),
                     showFormDialog: false } )
    })
  }
  handleSizePerPageList(sizePerPage) {
    alert(sizePerPage)
    this.setState({sizePerPage:sizePerPage})
  }
  render() {
    return (<div>
              <h1>Book</h1>
              <BootstrapTable data={this.state.bookList}
                              height="480"
                              hover condensed insertRow deleteRow pagination
                              selectRow={{
                                  mode: 'checkbox',
                                  bgColor: "rgb(238, 193, 213)",
                              }}
                              options={{
                                  page: this.state.page,
                                  sizePerPage: this.state.sizePerPage,
                                  sizePerPageList: [5,10,20],
                                  onPageChange: this.handlePageChange.bind(this),
                                  onRowClick: this.handleRowClicked.bind(this),
                                  onSizePerPageList: this.handleSizePerPageList.bind(this)

                                }}
                              >
                <TableHeaderColumn dataField="id" dataSort={true} isKey={true} width="150">ID</TableHeaderColumn>
                <TableHeaderColumn dataField="title" dataSort={true}>Title</TableHeaderColumn>
                <TableHeaderColumn dataField="price" dataSort={true}>Price</TableHeaderColumn>
              </BootstrapTable>
              <BookShowDialog show={this.state.showShowDialog}
                              selectedBookId={this.state.selectedBookId}
                              close={()=>this.setState({showShowDialog:false})}
                              editButtonAction={this.showFormDialog.bind(this)}/>
              <BookFormDialog show={this.state.showFormDialog}
                              selectedBookId={this.state.selectedBookId}
                              close={()=>this.setState({showFormDialog:false})}
                              submitButtonAction={this.updateBook.bind(this)}/>
           </div>);
  }
}

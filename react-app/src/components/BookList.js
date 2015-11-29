import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { History } from 'react-router'
import 'react-bootstrap-table/css/react-bootstrap-table-all.min.css';

import BookShowDialog from './BookShowDialog'
import * as ajax from '../ajax'

/**
 * List Book Domain class.
 */
export default class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = { bookList:[], page:1, sizePerPage:13,
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
  titleFormatter(cell, row){
    return <a onClick={this.handleTitleClicked.bind(this, row)}>{cell}</a>;
  }
  handleTitleClicked(row) {
    console.log(row.id)
    this.setState({ selectedBookId:row.id });
    return false;
  }
  render() {
    return (<div>
              <h1>Book</h1>
              <BootstrapTable data={this.state.bookList}
                              height="480"
                              hover condensed pagination insertRow deleteRow columnFilter search multiColumnSearch exportCSV
                              selectRow={{
                                mode:'checkbox',
                                clickToSelect:true,
                                bgColor: "rgb(238, 193, 213)",
                              }}
                              options={{
                                  page: this.state.page,
                                  sizePerPage: this.state.sizePerPage,
                                  sizePerPageList: [5,10],
                                  onPageChange: this.handlePageChange.bind(this)
                                }}
                              >
                <TableHeaderColumn dataField="id" dataSort={true} isKey={true} width="150">ID</TableHeaderColumn>
                <TableHeaderColumn dataField="title" dataSort={true} dataFormat={this.titleFormatter.bind(this)}>Title</TableHeaderColumn>
                <TableHeaderColumn dataField="price" dataSort={true}>Price</TableHeaderColumn>
              </BootstrapTable>
              <BookShowDialog selectedBookId={this.state.selectedBookId} close={()=>this.setState({selectedBookId:null})}  />
           </div>);
  }
}

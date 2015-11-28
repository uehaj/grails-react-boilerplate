import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import 'react-bootstrap-table/css/react-bootstrap-table-all.min.css';

import * as ajax from '../ajax'

/**
 * List Book Domain class.
 */
export default class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = { bookList:[] };
  }
  componentDidMount() {
    ajax.getBooks((data) => {
      this.setState({ bookList: data });
    })
  }
  render() {
    return (<div>
              <h1>Book</h1>
              <BootstrapTable data={this.state.bookList} striped={true} hover condensed>
                <TableHeaderColumn dataField="id" dataSort={true} isKey={true} dataAlign="center">ID</TableHeaderColumn>
                <TableHeaderColumn dataField="title" dataSort={true}>Title</TableHeaderColumn>
                <TableHeaderColumn dataField="price" dataSort={true}>Price</TableHeaderColumn>
              </BootstrapTable>
           </div>);
  }
}

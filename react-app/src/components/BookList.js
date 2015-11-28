import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { History } from 'react-router'
import 'react-bootstrap-table/css/react-bootstrap-table-all.min.css';

import * as ajax from '../ajax'

/**
 * List Book Domain class.
 */
//export default class BookList extends Component {
// @see https://github.com/petehunt/react-router-1/blob/master/UPGRADE_GUIDE.md#0132---0133
export default React.createClass({
  // constructor(props) {
  //   super(props);
  //   this.state = { bookList:[], page:1, sizePerPage:10 };
  // }
  mixins: [ History ],
  getInitialState() {
    return { bookList:[], page:1, sizePerPage:10 };
  },
  componentDidMount() {
    ajax.getBooks((data) => {
      this.setState({ bookList: data });
    })
  },
  handlePageChange(page, sizePerPage) {
    console.log(page, sizePerPage)
    this.setState({ page: page, sizePerPage: sizePerPage })
  },
  handleRowClick(row) {
    console.log(this.history)
    // @see https://github.com/rackt/react-router/issues/1798
    this.history.pushState({}, '/book/show/'+row.id)
  },
  render() {
    return (<div>
              <h1>Book</h1>
              <BootstrapTable data={this.state.bookList}
                              height="400"
                              striped hover condensed pagination insertRow deleteRow columnFilter search multiColumnSearch exportCSV
                              selectRow={{
                                mode:'checkbox',
                                clickToSelect:true
                              }}
                              options={{
                                  page: this.state.page,
                                  sizePerPage: this.state.sizePerPage,
                                  sizePerPageList: [5,10],
                                  onPageChange: this.handlePageChange/*.bind(this)*/,
                                  onRowClick:this.handleRowClick/*.bind(this)*/
                                }}
                              >
                <TableHeaderColumn dataField="id" dataSort={true} isKey={true}>ID</TableHeaderColumn>
                <TableHeaderColumn dataField="title" dataSort={true}>Title</TableHeaderColumn>
                <TableHeaderColumn dataField="price" dataSort={true}>Price</TableHeaderColumn>
              </BootstrapTable>
           </div>);
  }
});

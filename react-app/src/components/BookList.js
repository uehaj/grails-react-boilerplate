import React, { Component } from 'react';
import * as ajax from '../ajax'

export default class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {bookList:[]};
  }
  componentDidMount() {
    ajax.getBooks((data) => {
      this.setState({ bookList: data });
    })
  }
  render() {
    return (<ul>
            <li>
            <div>hogessDD</div></li>
            {this.state.bookList.map((book)=>{ return <li key={book.id}>{book.title}</li>; })}
            </ul>);
  }
}

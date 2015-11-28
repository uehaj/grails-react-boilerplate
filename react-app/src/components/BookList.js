import React, { Component } from 'react';
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
    return (<ul>
            {this.state.bookList.map((book)=>{ return <li key={book.id}>{book.title}</li>; })}
            </ul>);
  }
}

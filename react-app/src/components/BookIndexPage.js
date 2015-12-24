import React, { Component } from 'react';
import Breadcrumbs from 'react-breadcrumbs';

import BookList from './BookList.js'

export default class BookIndexPage extends Component {
  render() {
    return (
      <div>
        <Breadcrumbs wrapperElement="ol" itemElement="li" customClass="breadcrumb" separator="" routes={this.props.routes} />
        <div className="container-fluid">
        <div className="row">
        <div className="col-md-12">
        <div style={{paddingLeft: '1em', paddingRight: '1em'}}>
          <BookList />
        </div>
        </div>
        </div>
        </div>
      </div>
    );
  }
}

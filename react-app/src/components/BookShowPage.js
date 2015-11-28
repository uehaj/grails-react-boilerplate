import React, { Component } from 'react';
import Breadcrumbs from 'react-breadcrumbs';

import BookShow from './BookShow.js'

export default class BookShowPage extends Component {
  render() {
    return (
      <div>
        <Breadcrumbs wrapperElement="ol" itemElement="li" customClass="breadcrumb" separator="" routes={this.props.routes} />
        <div style={{paddingLeft: '1em', paddingRight: '1em'}}>
          <BookShow targetId={this.props.params.targetId}/>
        </div>
      </div>
    );
  }
}

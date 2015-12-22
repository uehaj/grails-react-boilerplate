import React, { Component } from 'react';
import Breadcrumbs from 'react-breadcrumbs';

export default class S1 extends Component {
  render() {
    return (
      <div>
        <Breadcrumbs wrapperElement="ol" itemElement="li" customClass="breadcrumb" separator="" routes={this.props.routes} />
        <div style={{paddingLeft: '1em'}}>
        S1. In react-router, page can be appear arbitrary menu positions.
        </div>
      </div>
    );
  }
}

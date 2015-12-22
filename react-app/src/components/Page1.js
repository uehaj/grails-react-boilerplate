import React, { Component } from 'react';
import Breadcrumbs from 'react-breadcrumbs';

export default class Page1 extends Component {
  render() {
    return (
      <div>
        <Breadcrumbs wrapperElement="ol" itemElement="li" customClass="breadcrumb" separator="" routes={this.props.routes} />
        <div style={{paddingLeft: '1em'}}>
        Page1.
        </div>
      </div>
    );
  }
}

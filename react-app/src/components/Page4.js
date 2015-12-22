import React, { Component } from 'react';
import Breadcrumbs from 'react-breadcrumbs';

export default class Page4 extends Component {
  render() {
    return (
      <div>
        <Breadcrumbs wrapperElement="ol" itemElement="li" customClass="breadcrumb" separator="" routes={this.props.routes} />
        <div style={{paddingLeft: '1em'}}>
        Page4.
        </div>
      </div>
    );
  }
}

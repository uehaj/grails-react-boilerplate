import React, { Component } from 'react';
import SecondLevelNavbar from './SecondLevelNavbar.js'

export default class P1 extends Component {
  render() {
    return (
      <div>
        <SecondLevelNavbar route={this.props.route} />
        <div style={{marginTop:60}}>
        {this.props.children}
        </div>
      </div>
    );
  }
}

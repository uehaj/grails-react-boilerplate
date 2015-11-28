import React, { Component } from 'react';
import SecondLevelNavbar from './SecondLevelNavbar.js'

export default class SecondLevel extends Component {
  render() {
    return (
      <div>
        {/* Generate second level menu(NavBar). */}
        <SecondLevelNavbar route={this.props.route} />
        {/* Page content. */}
        <div style={{marginTop:60, paddingTop: 40}}>
        {this.props.children}
        </div>
      </div>
    );
  }
}

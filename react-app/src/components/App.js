import React, { Component } from 'react';
import TopLevelNavbar from './TopLevelNavbar.js'

/**
 * Application top level structure.
 */
export default class App extends Component {
  render() {
    return (
      <div>
        {/* Top level menu(NavBar)*/}
        <TopLevelNavbar route={this.props.route} />
        {/* Page content */}
        {this.props.children}
        {/* Footer */}
        <footer className="footer">
          <div className="container">
            <p className="text-muted">Place sticky footer content here.</p>
          </div>
        </footer>
      </div>
    );
  }
}

import React, { Component } from 'react';
import TopLevelNavbar from './TopLevelNavbar.js'

export default class App extends Component {
  render() {
    return (
      <div>
        {/* 画面最上行のメニュー(NavBar)*/}
        <TopLevelNavbar route={this.props.route} />
        {/* 画面本体部分 */}
        {this.props.children}
        {/* フッター */}
        <footer className="footer">
          <div className="container">
            <p className="text-muted">Place sticky footer content here.</p>
          </div>
        </footer>
      </div>
    );
  }
}

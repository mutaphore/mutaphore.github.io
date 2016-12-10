'use strict';

import NavBar from "./navbar.jsx";
import Desktop from "./desktop.jsx";

const React    = require('react');
const ReactDOM = require('react-dom');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedView: null
    };
  }
  selectView(view) {

  }
  render() {
    return (
      <div id="app">
        <NavBar selectedView={this.state.selectedView}/>
        <Desktop selectedView={this.state.selectedView}/>
      </div>
    );
  }
}

module.exports = App;
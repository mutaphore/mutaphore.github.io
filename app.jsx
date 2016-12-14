'use strict';

import NavBar from "./navbar.jsx";
import Desktop from "./desktop.jsx";
import Constants from "./constants.jsx";

const React    = require('react');
const ReactDOM = require('react-dom');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      views: ["home", "projects", "about", "contact", "terminal"],
      selectedView: "home"
    };
  }
  selectView(view) {
    this.setState({ selectedView: view });
  }
  render() {
    return (
      <div id="app">
        <NavBar views={this.state.views}
                selectedView={this.state.selectedView} 
                selectView={this.selectView.bind(this)} 
                utcOffset={-5}/>
        <Desktop views={this.state.views}
                 selectedView={this.state.selectedView}
                 selectView={this.selectView.bind(this)} />
      </div>
    );
  }
}

module.exports = App;
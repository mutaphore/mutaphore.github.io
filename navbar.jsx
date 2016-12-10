'use strict';

import Constants from "./constants.jsx";

const React    = require('react');
const ReactDOM = require('react-dom');

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const self = this;
    const navItems = [];
    // only render the navbar items when not at home view
    if (this.props.selectedView !== "home") {
      this.props.views.forEach(function (view) {
        if (view === self.props.selectedView) {
          navItems.push(
            <li key={view} className="active"><a href="#" onClick={self.props.selectView.bind(null, view)}>{view}</a></li> 
          )
        } else {
          navItems.push(
            <li key={view}><a href="#" onClick={self.props.selectView.bind(null, view)}>{view}</a></li> 
          )
        }
      });
    }
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand">Dewei Chen</a>
        </div>
        <div className="navbar-collapse collapse">
          <ul className="nav navbar-nav">
            {navItems}
          </ul>
        </div>
      </nav>
    );
  }
}

module.exports = NavBar;
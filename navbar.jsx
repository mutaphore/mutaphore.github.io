'use strict';

const React    = require('react');
const ReactDOM = require('react-dom');

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
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
            <li id="home"><a href="#">home</a></li>
            <li id="projects"><a href="#">projects</a></li>
            <li id="about"><a href="#">about</a></li>
            <li id="contact"><a href="#">contact</a></li>
            <li id="terminal"><a href="#">terminal</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}

module.exports = NavBar;
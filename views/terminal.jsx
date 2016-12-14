'use strict';

const React    = require('react');
const ReactDOM = require('react-dom');

const Terminal = require("../js/terminal.js");

class TerminalView extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const term = new Terminal();
    term.init();
  }
  render() {
    return (
      <div className="term-window">
        <div id="term" className="terminal"></div>
      </div>
    );
  }
}

module.exports = TerminalView;
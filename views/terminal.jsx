'use strict';

const React    = require('react');
const ReactDOM = require('react-dom');

const Terminal = require("./js/terminal.js");

class TerminalView extends React.Component {
  render() {
    return (
      <div>
        <link href="./css/jquery.terminal.css" rel="stylesheet" />
        <script src="./js/terminal.js"></script>
        <script src="./js/jquery.terminal-0.8.7.min.js"></script>
        <script src="./js/JSInterpreter.js"></script>
        <script src="./js/LinearRegression.js"></script>
        <script src="./js/Urls.js"></script>
        <script type="text/javascript">
          new Terminal().init();
        </script>
        <div className="container">
          <div className="term-window">
            <div id="term" className="terminal"></div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = TerminalView;
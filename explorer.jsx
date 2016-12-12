'use strict';

import Constants from "./constants.jsx";

const React    = require('react');
const ReactDOM = require('react-dom');

class Explorer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const explorerStyle = {
      width: this.props.width
    };
    const explorerAreaStyle = {
      height: this.props.height
    };
    // create the view component
    const view = React.createElement(Constants.get(this.props.selectedView).view);
    return (
      <div className="explorer" style={explorerStyle}>
        <div className="explorer-bar text-center">
          <div className="explorer-close-btn">
            <button className="btn btn-danger btn-xs" onClick={this.props.closeView}>
              <span className="glyphicon glyphicon-remove"></span>
            </button> 
          </div>
          <span>{this.props.selectedView.toUpperCase()}</span>
        </div>
        <div className="explorer-area" style={explorerAreaStyle}>
          {view}
        </div>
      </div>
    );
  }
}

module.exports = Explorer;

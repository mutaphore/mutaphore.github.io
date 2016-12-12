'use strict';

const React    = require('react');
const ReactDOM = require('react-dom');

class Icon extends React.Component {
  render() {
    return (
      <div className="media">
        <div className="media-left media-middle">
          <a href="#" onClick={this.props.selectView}>
            <img className="media-object" src={this.props.icon} />
          </a>
        </div>
        <div className="media-body" style={{ color: "#F5F5F5" }}>
          <h4 className="media-heading">{this.props.title}</h4>
        </div>
      </div>
    );
  }
}

module.exports = Icon;
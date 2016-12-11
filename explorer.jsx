'use strict';

const React    = require('react');
const ReactDOM = require('react-dom');

class Explorer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const explorerBarStyle = {
      width: this.props.width
    };
    const explorerStyle = {
      width: this.props.width,
      height: this.props.height
    };
    return (
      <div>
        <div className="explorer-bar" style={explorerBarStyle}>
          <div className="explorer-close-btn">
            <button className="btn btn-danger btn-xs" onClick={this.props.closeView}>
              <span className="glyphicon glyphicon-remove"></span>
            </button> 
          </div>
          <span>{this.props.selectedView.toUpperCase()}</span>
        </div>
        <div className="explorer" style={explorerStyle}>
          <div className="row">
            <div className="col-md-12">
              <li className="list-group-item text-left"><img src="./assets/GitHub-Mark-32px.png"/> <a href="https://github.com/mutaphore">https://github.com/mutaphore</a></li>
              <li className="list-group-item text-left"><img src="./assets/In-Black-34px-R.png"/> <a href="https://www.linkedin.com/in/dewei-chen-1524aba">https://linkedin.com/in/dewei-chen-1524aba</a></li>
              <li className="list-group-item text-left" ><img src="./assets/win95/exchng32_12950.ico"/> <a href="mailto:dewei.chen@cs.nyu.edu">dewei dot chen at cs.nyu.edu</a></li>
              <li className="list-group-item text-left"><img src="./assets/win95/write_1.ico"/> <a href="https://mutaphore.github.io">https://mutaphore.github.io</a></li>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Explorer;

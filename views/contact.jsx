'use strict';

const React    = require('react');
const ReactDOM = require('react-dom');

class ContactView extends React.Component {
  render() {
    return (
      <div>
        <li className="list-group-item text-left"><img src="./assets/GitHub-Mark-32px.png"/> <a href="https://github.com/mutaphore">https://github.com/mutaphore</a></li>
        <li className="list-group-item text-left"><img src="./assets/In-Black-34px-R.png"/> <a href="https://www.linkedin.com/in/dewei-chen-1524aba">https://linkedin.com/in/dewei-chen-1524aba</a></li>
        <li className="list-group-item text-left" ><img src="./assets/win95/exchng32_12950.ico"/> <a href="mailto:dewei.chen@cs.nyu.edu">dewei dot chen at cs.nyu.edu</a></li>
        <li className="list-group-item text-left"><img src="./assets/win95/write_1.ico"/> <a href="https://mutaphore.github.io">https://mutaphore.github.io</a></li>
      </div>
    );
  }
}

module.exports = ContactView;
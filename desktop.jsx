'use strict';

import Icon from "./icon.jsx";

const React    = require('react');
const ReactDOM = require('react-dom');

class Desktop extends React.Component {
  render() {
    return (
      <div id="desktop">
        <Icon title="home" icon="./assets/win95/msnp32_SERVER_ICON.ico"/>
        <Icon title="projects" icon="./assets/win95/wmsui32_3924.ico"/>
        <Icon title="about" icon="./assets/win95/ulclient_1002.ico"/>
        <Icon title="contact" icon="./assets/win95/smmscrpt_100.ico"/>
        <Icon title="terminal" icon="./assets/win95/shell32_3.ico"/>
        <Icon title="" icon="./assets/win95/winhlp32_4001.ico"/>
      </div>
    )
  }
}

module.exports = Desktop;
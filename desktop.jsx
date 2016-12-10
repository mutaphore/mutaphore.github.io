'use strict';

import Icon from "./icon.jsx";
import Constants from "./constants.jsx";

const React    = require('react');
const ReactDOM = require('react-dom');

class Desktop extends React.Component {
  render() {
    return (
      <div id="desktop">
        <Icon title="home" icon={Constants.get("ICON_HOME")}/>
        <Icon title="projects" icon={Constants.get("ICON_PROJECTS")}/>
        <Icon title="about" icon={Constants.get("ICON_ABOUT")}/>
        <Icon title="contact" icon={Constants.get("ICON_CONTACT")}/>
        <Icon title="terminal" icon="./assets/win95/shell32_3.ico"/>
        <Icon title="" icon="./assets/win95/winhlp32_4001.ico"/>
      </div>
    )
  }
}

module.exports = Desktop;
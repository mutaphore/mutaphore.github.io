'use strict';

import Icon from "./icon.jsx";
import Constants from "./constants.jsx";

const React    = require('react');
const ReactDOM = require('react-dom');

class Desktop extends React.Component {
  selectView(view) {
    this.props.selectView(view);
  }
  render() {
    const self = this;
    const icons = [];
    // only show icons when at home view
    if (this.props.selectedView === "home") {
      this.props.views.forEach(function (view) {
        icons.push(
          <Icon key={view} title={view} 
                icon={Constants.get(view).icon}
                selectView={self.selectView.bind(self, view)} />
        );
      });
    }
    return (
      <div id="desktop">
        {icons}
      </div>
    )
  }
}

module.exports = Desktop;
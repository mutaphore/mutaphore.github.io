'use strict';

import Icon from "./icon.jsx";
import Explorer from "./explorer.jsx";
import Constants from "./constants.jsx";

const React    = require('react');
const ReactDOM = require('react-dom');

class Desktop extends React.Component {
  constructor(props) {
    super(props);
    const self = this;
    // initialize icons
    const icons = [];
    this.props.views.forEach(function (view) {
      icons.push(
        <Icon key={view} 
              title={Constants.get(view).title} 
              icon={Constants.get(view).icon}
              selectView={self.selectView.bind(self, view)} />
      );
    });
    // add help icon (no view)
    icons.push(
      <Icon key="help" title="" icon={Constants.get("help").icon} />
    );
    this.state = {
      icons: icons
    };
  }
  selectView(view) {
    this.props.selectView(view);
  }
  render() {
    const view = this.props.selectedView;
    return (
      <div id="desktop">
        {view === "home" && this.state.icons}
        {view !== "home" && 
          <Explorer selectedView={this.props.selectedView}
                    closeView={this.selectView.bind(this, "home")}
                    width={Constants.get(view).width}
                    height={Constants.get(view).height} />}

      </div>
    )
  }
}

module.exports = Desktop;
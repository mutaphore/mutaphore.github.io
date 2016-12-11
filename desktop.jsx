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
    let icons = [];
    let explorer = null;
    if (view === "home") {
      // only show icons when at home view
      icons = this.state.icons;
    } else {
      // show view explorer
      explorer = <Explorer selectedView={this.props.selectedView}
                           width={Constants.get(view).width}
                           height={Constants.get(view).height} />
    }
    return (
      <div id="desktop">
        {icons}
        {explorer}
      </div>
    )
  }
}

module.exports = Desktop;
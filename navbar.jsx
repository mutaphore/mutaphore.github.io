'use strict';

import Constants from "./constants.jsx";

const React    = require('react');
const ReactDOM = require('react-dom');

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }
  setTime() {
    let currentdate = new Date();
    let hours = currentdate.getUTCHours() + parseInt(this.props.utcOffset);    

    // correct for number over 24, and negatives
    if( hours >= 24 ){ hours -= 24; }
    if( hours < 0   ){ hours += 12; }

    // add leading zero, first convert hours to string
    hours = hours + "";
    if( hours.length == 1 ){ hours = "0" + hours; }

    // minutes are the same on every time zone
    let minutes = currentdate.getUTCMinutes();
  
    // add leading zero, first convert hours to string
    minutes = minutes + "";
    if( minutes.length == 1 ){ minutes = "0" + minutes; }

    this.setState({
      hours: hours,
      minutes: minutes
    });
  }
  componentWillMount() {
    this.setTime();
  }
  componentDidMount() {
     window.setInterval(function () {
      this.setTime();
    }.bind(this), 60*1000);
  }
  render() {
    const self = this;
    const navItems = [];
    const time = " " + this.state.hours + ":" + this.state.minutes;
    // only render the navbar items when not at home view
    if (this.props.selectedView !== "home") {
      this.props.views.forEach(function (view) {
        if (view === self.props.selectedView) {
          navItems.push(
            <li key={view} className="active"><a href="#" onClick={self.props.selectView.bind(null, view)}>{view}</a></li> 
          )
        } else {
          navItems.push(
            <li key={view}><a href="#" onClick={self.props.selectView.bind(null, view)}>{view}</a></li> 
          )
        }
      });
    }
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand">Dewei Chen</a>
        </div>
        <div className="navbar-collapse collapse">
          <ul className="nav navbar-nav">
            {navItems}
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#/home">
                <span className="glyphicon glyphicon-time" aria-hidden="true"></span> 
                {time}
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

module.exports = NavBar;
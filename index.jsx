'use strict';

import App from "./app.jsx";
import { Router, Route, Link, browserHistory, hashHistory } from 'react-router';

const React    = require('react');
const ReactDOM = require('react-dom');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
  </Router>,
  document.getElementById("root")
);
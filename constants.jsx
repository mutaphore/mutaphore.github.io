'use strict';

import ProjectsView from "./views/projects.jsx";
import AboutView from "./views/about.jsx";
import ContactView from "./views/contact.jsx";
import TerminalView from "./views/terminal.jsx";

module.exports = (function () {
  const priv = {
    home: {
      title: "home",
      icon: "./assets/win95/msnp32_SERVER_ICON.ico",
      width: "100%",
      height: "600px"
    },
    projects: {
      title: "projects",
      view: ProjectsView,
      icon: "./assets/win95/wmsui32_3924.ico",
      width: "900px",
      height: "580px"
    },
    about: {
      title: "about",
      view: AboutView,
      icon: "./assets/win95/ulclient_1002.ico",
      width: "700px",
      height: "550px"
    },
    contact: {
      title: "contact",
      view: ContactView,
      icon: "./assets/win95/smmscrpt_100.ico",
      width: "400px",
      height: "auto"
    },
    terminal: {
      title: "terminal",
      view: TerminalView,
      icon: "./assets/win95/shell32_3.ico",
      width: "1000px",
      height: "550px"
    },
    help: {
      title: "help",
      icon: "./assets/win95/winhlp32_4001.ico",
      popover: `<span>Built with React.js</span><br>View the <a href="https://github.com/mutaphore/mutaphore.github.io">source</a>`
    },
    trash: {
      title: "trash",
      icon: "./assets/win95/shell32_33.ico",
      popover: `<span>Looks like there some trash in here...</span><br/>
                <a href="/archive">old version of this site made with Angular.js</a>`
    }
  };
  return {
    get: function (name) { return priv[name]; }
  };
})();
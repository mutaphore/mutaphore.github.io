'use strict';

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
      icon: "./assets/win95/wmsui32_3924.ico",
      width: "100%",
      height: "600px"
    },
    about: {
      title: "about",
      icon: "./assets/win95/ulclient_1002.ico",
      width: "100%",
      height: "600px"
    },
    contact: {
      title: "contact",
      icon: "./assets/win95/smmscrpt_100.ico",
      width: "400px",
      height: "auto"
    },
    terminal: {
      title: "terminal",
      icon: "./assets/win95/shell32_3.ico",
      width: "100%",
      height: "600px"
    },
    help: {
      title: "help",
      icon: "./assets/win95/winhlp32_4001.ico"
    }
  };
  return {
    get: function (name) { return priv[name]; }
  };
})();
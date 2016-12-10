'use strict';

module.exports = (function () {
  const priv = {
    home: {
      icon: "./assets/win95/msnp32_SERVER_ICON.ico"
    },
    projects: {
      icon: "./assets/win95/wmsui32_3924.ico"
    },
    about: {
      icon: "./assets/win95/ulclient_1002.ico"
    },
    contact: {
      icon: "./assets/win95/smmscrpt_100.ico",
    },
    terminal: {
      icon: "./assets/win95/shell32_3.ico",
    },
    help: {
      icon: "./assets/win95/winhlp32_4001.ico"
    }
  };
  return {
    get: function (name) { return priv[name]; }
  };
})();
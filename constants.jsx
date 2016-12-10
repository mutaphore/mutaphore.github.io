'use strict';

module.exports = (function () {
  const priv = {
    // selected view
    "VIEW_HOME": "viewhome",
    "VIEW_PROJECTS": "viewprojects",
    "VIEW_ABOUT": "viewabout",
    "VIEW_CONTACT": "viewcontact",
    "VIEW_TERMINAL": "viewterminal",
    // icon image directory
    "ICON_HOME": "./assets/win95/msnp32_SERVER_ICON.ico",
    "ICON_PROJECTS": "./assets/win95/wmsui32_3924.ico",
    "ICON_ABOUT": "./assets/win95/ulclient_1002.ico",
    "ICON_CONTACT": "./assets/win95/smmscrpt_100.ico",
    "ICON_TERMINAL": "./assets/win95/shell32_3.ico",
    "ICON_HELP": "./assets/win95/winhlp32_4001.ico"
  };
  return {
    get: function (name) { return priv[name]; }
  };
})();
homeAppControllers = angular.module('homeAppControllers', []);

homeAppControllers.controller("NavigationController", ["$scope", "$interval", "$http", "$location",
  function($scope, $interval, $http, $location) {
    this.activeItem = "home";
    this.navItems = [
      {name: "home", icon: "msnp32_SERVER_ICON.ico"},
      {name: "projects", icon: "wmsui32_3924.ico"},
      {name: "about", icon: "ulclient_1002.ico"},
      {name: "contact", icon: "smmscrpt_100.ico"},
      {name: "terminal", icon: "shell32_3.ico"},
    ];

    $scope.isActive = function(route) {
      return ("/" + route) === $location.path();
    }

    // Get client ip address
    $scope.myIp = "unknown";
    $.getJSON("https://api.ipify.org?format=jsonp&callback=?",
      function(json) {
        $scope.myIp = json.ip;
      }
    );

    // Logs click event by sending ajax request to server
    this.logClickEvent = function(icon) {
      $http.post("http://ec2-52-3-198-197.compute-1.amazonaws.com:8080/spring/click_event/add", {
        description: "Homepage <" + icon + "> clicked",
        ipAddress: $scope.myIp
      }).then(function(res) {
        console.log("Success");
      }, function(res) {
        console.log("Fail");
      });
    };

    // Get date time
    $scope.curTime = Date.now();
    var stop = $interval(function() {
      $scope.curTime = Date.now();
    }, 1000);
    // Make sure when we exit scope kill the interval
    $scope.$on('$destroy', function() {
      $interval.cancel(stop);
      stop = undefined;
    });

    // Setup popover messages
    $("#info_icon").popover({
      html: true,
      content: "This app was hand built using Angular.js for client side and the Spring framework for RESTful services.<br>" +
        "<img src='https://builtwith.angularjs.org/img/AngularJS-large.png' style='width: 120px; height: 35px;'>" +
        "<img src='http://dturanski.github.io/SpringOne2013/img/spring.jpg' style='width: 90px; height: 35px;'>",
      trigger: "focus"
    });

    $("#trashcan_icon").popover({
      content: "Looks like there's some trash in here...",
      trigger: "focus"
    });
  }
]);
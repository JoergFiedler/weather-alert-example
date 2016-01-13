"use strict";

function weatherAlerts(weatherApiService) {
  return {
    restrict: "A",
    scope: true,
    templateUrl: "/template/alerts.html",
    controller: "weatherAlertsController",
    link: function($scope, element, attrs) {}
  };
}

module.exports = weatherAlerts;

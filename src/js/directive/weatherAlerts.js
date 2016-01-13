"use strict";

function weatherAlertsController($scope, $timeout, weatherApiService) {
  $scope.name = "";
  $scope.interval = "";
  var timeoutPromise;

  function handleResponse(data) {
    $scope.alerts = {"alerts":[{"timeSegment":[{"value":"","segment":"E","otherAttributes":{},"day_of_week":"4"},{"value":"","segment":"A","otherAttributes":{},"day_of_week":"5"},{"value":"","segment":"E","otherAttributes":{},"day_of_week":"5"}],"type":"13","description":"Snow advisory"}],"country":"United States","state":"Oregon","city":"Altamont","latitude":42.20681,"longitude":-121.73722,"timezone":-8}
  }

  function requestAlerts() {
    if ($scope.name !== "") {
      weatherApiService
        .getAlerts($scope.name)
        .then(handleResponse, handleResponse);
    }
  }

  function scheduleRequest() {
    requestAlerts();
    timeoutPromise = $timeout( scheduleRequest, $scope.interval*1000);
  }

  function schedule() {
    if (typeof timeoutPromise !== "undefined") {$timeout.cancel(timeoutPromise);}
    scheduleRequest();
  }

  $scope.requestAlerts = requestAlerts;
  $scope.schedule = schedule;
}

function weatherAlerts(weatherApiService) {
  return {
    restrict: "A",
    scope: true,
    templateUrl: "/template/alerts.html",
    controller: weatherAlertsController,
    link: function($scope, element, attrs) {}
  };
}

module.exports = weatherAlerts;

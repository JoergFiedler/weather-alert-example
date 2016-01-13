"use strict";

function weatherAlertsController($scope, $timeout, weatherApiService) {
  $scope.name;
  $scope.interval;
  var timeoutPromise;

  function handleResponse(data) {
    $scope.response = {"alerts":{"alerts":[{"timeSegment":[{"value":"","segment":"E","otherAttributes":{},"day_of_week":"4"},{"value":"","segment":"A","otherAttributes":{},"day_of_week":"5"},{"value":"","segment":"E","otherAttributes":{},"day_of_week":"5"}],"type":"13","description":"Snow advisory"}],"country":"United States","state":"Oregon","city":"Altamont","latitude":42.20681,"longitude":-121.73722,"timezone":-8},"feedCreation":"2016-01-13T11:48:19.393Z","metric":true}
  }

  function requestAlerts() {
    weatherApiService.getAlerts("Altamont").then(handleResponse, handleResponse);
  }

  function scheduleRequest() {
    timeoutPromise = $timeout(function() {
      requestAlerts();
      scheduleRequest();
    }, $scope.interval);
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
    link: function($scope, element, attrs) {
    }
  };
}

module.exports = weatherAlerts;

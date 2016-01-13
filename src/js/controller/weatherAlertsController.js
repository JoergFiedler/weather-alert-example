"use strict";

function weatherAlertsController($scope, $timeout, weatherApiService) {
  var timeoutPromise;
  $scope.name = "";
  $scope.interval = "";

  function handleResponse(response) {
    if ( response.status === 200 ) {
      $scope.alerts = response.data.alerts;
    }
    $scope.status = response.status;
  }

  function requestAlerts() {
    if ($scope.weatherForm.$valid === true) {
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
    if ( $scope.interval !== "" && $scope.interval >= 5 ) { scheduleRequest(); }
  }

  $scope.requestAlerts = requestAlerts;
  $scope.schedule = schedule;
}

module.exports = weatherAlertsController;

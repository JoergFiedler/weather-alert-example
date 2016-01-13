"use strict";

function weatherAlertsController($scope, $timeout, weatherApiService) {
  var timeoutPromise;
  $scope.name = "";
  $scope.interval = "";

  function handleResponse(alertsPerCity) {
    $scope.cities = alertsPerCity.filter(function(cityAlert){
      return cityAlert.status === 200;
    }).map(function(cityAlert){
      return cityAlert.data.alerts;
    });
  }

  function handleErrorResponse(response) {
    $scope.errors = JSON.stringify(response.data);
  }

  function requestAlerts() {
    if ($scope.weatherForm.$valid === true) {
      $scope.errors = "";
      weatherApiService
        .getAlerts($scope.lat, $scope.lng, $scope.radius)
        .then(handleResponse, handleErrorResponse);
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

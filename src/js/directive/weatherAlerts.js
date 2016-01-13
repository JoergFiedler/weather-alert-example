"use strict";

function weatherAlertsController($scope, weatherApiService) {
  $scope.name;
  $scope.interval;

  function handleResponse(data) {
    //console.log(data);
    $scope.response = {"alerts":{"alerts":[{"timeSegment":[{"value":"","segment":"E","otherAttributes":{},"day_of_week":"4"},{"value":"","segment":"A","otherAttributes":{},"day_of_week":"5"},{"value":"","segment":"E","otherAttributes":{},"day_of_week":"5"}],"type":"13","description":"Snow advisory"}],"country":"United States","state":"Oregon","city":"Altamont","latitude":42.20681,"longitude":-121.73722,"timezone":-8},"feedCreation":"2016-01-13T11:48:19.393Z","metric":true}
  }

  function requestAlerts() {
    weatherApiService.getAlerts("Altamont").then(handleResponse, handleResponse);
  }

  $scope.requestAlerts = requestAlerts;
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

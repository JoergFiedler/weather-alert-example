"use strict";

function weatherApiService($http, $q, weatherApiUrl, apiUrlBuilder, reverseApiService) {
  var product = "alerts";

  function getAlerts(lat, lng, radius) {
    var deferred = $q.defer();

    reverseApiService.getCityNames(lat, lng, radius).then(
        function(response){
          var all= response.map(function(cityName) {
            return getAlertsForCity(cityName);
          });
          $q.all(all).then(function(alerts){
            deferred.resolve(alerts);
          });
        });

    return deferred.promise;
  }

  function getAlertsForCity(name) {
    return $http({
      url: apiUrlBuilder.create(
             weatherApiUrl,
             {
               name: name,
               product: product,
               app_id: "DemoAppId01082013GAL",
               app_code: "AJKnXv84fjrb0KIHawS0Tg",
               jsonpcallback: "JSON_CALLBACK"}),
      method: 'JSONP'
    })
  }

  return {
    getAlerts: getAlerts
  };
};

module.exports = weatherApiService;

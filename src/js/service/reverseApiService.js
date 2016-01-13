"use strict";

function reverseApiService($http, $q, reverseApiUrl, apiUrlBuilder) {
  function extractCityNames(deferred, response) {
    var cityNames = [];
    var view = response.data.Response.View;
    if (view.length > 0) {
      cityNames = view[0].Result.map( function(result) {
        return result.Location.Address.City;
      }).filter(function(cityName){ return typeof cityName !== "undefined"});
    }

    deferred.resolve(cityNames);
  }

  function getCityNames(lat, lng, radius) {
    var params = [];
    var deferred = $q.defer();

    params.push(lat);
    params.push(lng);
    params.push(radius);

    $http({
      url: apiUrlBuilder.create(
             reverseApiUrl,
             {
               prox: params.join("%2C"),
               mode: "retrieveAreas",
               level: "city",
               maxResults: "10",
               gen: "8",
               locationattributes: "address",
               jsoncallback: "JSON_CALLBACK",
               app_id: "hzVubB90T6SNl96pONJv",
               app_code: "_iFKMR3GnrYLzj-iMOOLGA"
             }),
      method: 'JSONP'
    }).then(
      function(response){
        extractCityNames(deferred, response);
      },
      function(response) {
        deferred.reject(response);
      });

    return deferred.promise;
  }

  return {
    getCityNames: getCityNames
  };
};

module.exports = reverseApiService;

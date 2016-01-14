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
               level: "city", // not sure but you get result on country level as well, do not understand the meaning if this param
               maxResults: "10",
               gen: "8", // you won't get more than 1 result if you use the most recent version of this resource
               locationattributes: "address", // you get additional aatributes as well, maybe you can not dismiss them - not sure yet
               jsoncallback: "JSON_CALLBACK",
               app_id: "hzVubB90T6SNl96pONJv", // these credentials won't work with the weather API
               app_code: "_iFKMR3GnrYLzj-iMOOLGA" // no idea why
             }),
      method: 'JSONP'
    }).then(
      function(response){
        extractCityNames(deferred, response);
      },
      function(response) {
        // not be called as the service returns 200
        // iwhen there are authentication issues
        deferred.reject(response);
      });

    return deferred.promise;
  }

  return {
    getCityNames: getCityNames
  };
};

module.exports = reverseApiService;

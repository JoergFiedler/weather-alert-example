"use strict";

function weatherApiService($http, apiUrlBuilder) {

  function getAlerts(name) {
    return $http({
      url: apiUrlBuilder.create({name: name}),
      method: 'JSONP'
    })
  }

  return {
    getAlerts: getAlerts
  };
};

module.exports = weatherApiService;

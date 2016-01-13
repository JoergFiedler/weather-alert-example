"use strict";

function weatherApiService($http, querStringBuilder) {

  function getAlerts(name) {
    $http.get();
  }

  return {
    getAlerts: getAlerts
  };
};

module.exports = weatherApiService;

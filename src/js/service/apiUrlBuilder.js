"use strict";

function apiUrlBuilder() {
  var baseUrl;

  function mapToString(params) {
    return Object.keys(params).map(function(key) {
      return key + "=" + params[key];
    }).join('&');
  }

  function create(apiUrl, params) {
    return apiUrl + "?" + mapToString(params);
  }

  return {
    create: create
  };
}

module.exports = apiUrlBuilder;

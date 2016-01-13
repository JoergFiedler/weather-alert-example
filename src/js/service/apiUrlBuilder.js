"use strict";

function apiUrlBuilder(apiUrl, product, appId, appCode) {
  var baseParams = {
    product: product,
    app_id: appId,
    app_code: appCode,
    jsonpcallback: "JSON_CALLBACK"
  }
  var baseUrl;

  function mapToString(params) {
    return Object.keys(params).map(function(key) {
      return key + "=" + params[key];
    }).join('&');
  }

  function create(params) {
    return baseUrl + "&" + mapToString(params);
  }

  baseUrl = apiUrl + "?" + mapToString(baseParams);

  return { create: create };
}

module.exports = apiUrlBuilder;

"use strict";

describe("Api Url Builder", function() {
  var service;

  beforeEach(function() {
    var urlBuilder = require("../../../src/js/service/apiUrlBuilder");
    service = new urlBuilder("http://domain.tld", "alerts", "id", "code");
  });

  it("Creates a query string from params", function() {
    var query = service.create({ name: "Berlin" });
    expect(query).toEqual("http://domain.tld?product=alerts&app_id=id&app_code=code&jsonpcallback=JSON_CALLBACK&name=Berlin");
  });
});

"use strict";

describe("Api Url Builder", function() {
  var service;

  beforeEach(function() {
    var urlBuilder = require("../../../src/js/service/apiUrlBuilder");
    service = new urlBuilder();
  });

  it("Creates a query string from params", function() {
    var query = service.create("http://domain.tld", { name: "Berlin" });
    expect(query).toEqual("http://domain.tld?name=Berlin");
  });
});

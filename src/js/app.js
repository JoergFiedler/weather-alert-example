"use strict";

var angular = require("angular");
var app = angular.module("weatherAlerts", []);

app.constant("product", "alerts");
app.constant("apiUrl", "https://weather.cit.api.here.com/weather/1.0/report.json");
app.constant("appId", "DemoAppId01082013GAL");
app.constant("appCode", "AJKnXv84fjrb0KIHawS0Tg");

app.filter("dayOfWeek", require("./filter/dayOfWeek"));
app.filter("segment", require("./filter/segmentFilter"));

app.directive("weatherAlerts", require("./directive/weatherAlerts"));

app.service("apiUrlBuilder", require("./service/apiUrlBuilder"));
app.service("weatherApiService", require("./service/weatherApiService"));

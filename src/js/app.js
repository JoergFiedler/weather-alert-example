"use strict";

var angular = require("angular");
var app = angular.module("weatherAlerts", []);

app.constant("weatherApiUrl", "https://weather.cit.api.here.com/weather/1.0/report.json");
app.constant("reverseApiUrl", "https://reverse.geocoder.cit.api.here.com/6.2/reversegeocode.json");
app.constant("appId", "hzVubB90T6SNl96pONJv");
app.constant("appCode", "_iFKMR3GnrYLzj-iMOOLGA");

app.controller("weatherAlertsController", require("./controller/weatherAlertsController"));
app.filter("dayOfWeek", require("./filter/dayOfWeek"));
app.filter("segment", require("./filter/segmentFilter"));

app.directive("weatherAlerts", require("./directive/weatherAlerts"));

app.service("apiUrlBuilder", require("./service/apiUrlBuilder"));
app.service("weatherApiService", require("./service/weatherApiService"));
app.service("reverseApiService", require("./service/reverseApiService"));

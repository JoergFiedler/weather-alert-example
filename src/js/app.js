"use strict";

var angular = require("angular");
var app = angular.module("weatherAlerts", []);

app.constant("product", "alerts");
app.constant("app_id", "DemoAppId01082013GAL");
app.constant("app_code", "AJKnXv84fjrb0KIHawS0Tg");

require("./service/apiUrlBuilder");
require("./service/weatherApiService");

"use strict";

function segmentFilter() {
  var segments = { M: "Morning", A: "Afternoon", E: "Evening", N: "Night"};

  return function(input) {
    var segment = segments[input];

    return typeof segment !== "undefined" ? segment : "Be surprised when!";
  }
}

module.exports = segmentFilter;

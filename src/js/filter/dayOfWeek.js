"use strict";

function dayOfWeekFilter() {
  var weekdays = { 1: "Sunday", 2: "Monday", 3: "Tuesday", 4: "Wednesday", 5: "Thursday", 6: "Friday", 7: "Saturday"};

  return function(input) {
    var day = weekdays[input];

    return typeof day !== undefined ? day : "Seems like we invented a new weekday.";
  }
}

module.exports = dayOfWeekFilter;

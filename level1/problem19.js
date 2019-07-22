const bigInt = require('big-integer');
// Counting Sundays

/*
You are given the following information, but you may prefer to do some research for yourself.

1 Jan 1900 was a Monday.
Thirty days has September,
April, June and November.
All the rest have thirty-one,
Saving February alone,
Which has twenty-eight, rain or shine.
And on leap years, twenty-nine.
A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.
How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?
*/
const daysPerMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function isLeapYear(year) {
  return (year % 1000 === 0 && year % 400 === 0) || (year % 4 === 0);
}

function countNumberOfDaysOfMonthsAtYear(year, initialDays = 1) {
  let days = initialDays;
  const daysEachMonth = [];
  const daysPerMonthOfYear = Array.from(daysPerMonth);
  if (isLeapYear(year)) {
    daysPerMonthOfYear[1] = 29;
  }
  for (let month = 0; month < 12; month++) {
    days += daysPerMonthOfYear[month];
    daysEachMonth[month] = days;
  }
  return daysEachMonth;
}

function countingSundays() {
  const now = Date.now();
  const daysOf1900 = countNumberOfDaysOfMonthsAtYear(1900, 1);
  var totalDays = bigInt(daysOf1900[daysOf1900.length - 1]);
  var sundays = totalDays % 7 === 0 ? 1 : 0;
  for (let i = 1901; i <= 2000; i++) {
    let daysPerMonthThisYear = Array.from(daysPerMonth);
    if (isLeapYear(i)) {
      daysPerMonthThisYear[1] = 29;
    }
    for (let month = 0; month < 12; month++) {
      totalDays = totalDays.add(bigInt(daysPerMonthThisYear[month]));
      if (totalDays % 7 === 0 && !(month === 11 && i === 2000)) {
        sundays++;
      }
    }
  }
  console.log(require('../utils/time')(now));
  return sundays;
}
console.log(countingSundays());

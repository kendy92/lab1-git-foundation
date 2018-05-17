/* PART 1 */

//Create an enum of days and months
enum days {Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday};

enum months {January,February, March, April, May, June, July, August,September,October,November,December};

//initialize date object
let d: Date = new Date();

//get current date
var currentDay: any = days[d.getDay()];
var currentDate: any = d.getDate();
var currentMonth: any = months[d.getMonth()];
var currentYear: any = d.getFullYear();

//print result to div#p--today-date
document.getElementById("p--today-date").innerHTML = "Today is " + currentDay + " " + currentMonth + " " + currentDate + ", " + currentYear + ".";

/* PART 1 */
//Create an enum of days and months
var days;
(function (days) {
    days[days["Sunday"] = 0] = "Sunday";
    days[days["Monday"] = 1] = "Monday";
    days[days["Tuesday"] = 2] = "Tuesday";
    days[days["Wednesday"] = 3] = "Wednesday";
    days[days["Thursday"] = 4] = "Thursday";
    days[days["Friday"] = 5] = "Friday";
    days[days["Saturday"] = 6] = "Saturday";
})(days || (days = {}));
;
var months;
(function (months) {
    months[months["January"] = 0] = "January";
    months[months["February"] = 1] = "February";
    months[months["March"] = 2] = "March";
    months[months["April"] = 3] = "April";
    months[months["May"] = 4] = "May";
    months[months["June"] = 5] = "June";
    months[months["July"] = 6] = "July";
    months[months["August"] = 7] = "August";
    months[months["September"] = 8] = "September";
    months[months["October"] = 9] = "October";
    months[months["November"] = 10] = "November";
    months[months["December"] = 11] = "December";
})(months || (months = {}));
;
//initialize date object
var d = new Date();
//get current date
var currentDay = days[d.getDay()];
var currentDate = d.getDate();
var currentMonth = months[d.getMonth()];
var currentYear = d.getFullYear();
//print result to div#p--today-date
document.getElementById("p--today-date").innerHTML = "Today is " + currentDay + " " + currentMonth + " " + currentDate + ", " + currentYear + ".";
/* PART 2 */
//HTML ELEMENT
var userBirthday;
var btnBirthday = document.getElementById("button--birthday");
var pBirthdayMsg = document.getElementById("p--birthday-message");
function constructDateString(inputDate) {
    var today = new Date();
    if ((inputDate.getMonth() === today.getMonth()) && (inputDate.getDate() == today.getDate())) {
        return 'Happy birthday!';
    }
    //return the date of the birthday of the current year
    var currentYearBirthday = new Date(today.getFullYear() + '-' + inputDate.getMonth() + '-' + inputDate.getDate());
    return 'Your birthday is on ' + months[currentYearBirthday.getMonth() + 1] + ' ' + currentYearBirthday.getDate() + ', ' + today.getFullYear();
}
btnBirthday.onclick = function () {
    //assign userBirthday value to input value
    userBirthday = document.getElementById("input--date-picker").value;
    var userBirthdayDate = new Date(userBirthday + " GMT-0400");
    pBirthdayMsg.innerHTML = constructDateString(userBirthdayDate);
};

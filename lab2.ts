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

/* PART 2 */

//HTML ELEMENT
let userBirthday: string;
let btnBirthday = document.getElementById("button--birthday");
let pBirthdayMsg = document.getElementById("p--birthday-message");

function constructDateString(inputDate: Date): string {
  let today: Date = new Date();
  if((inputDate.getMonth() === today.getMonth()) && (inputDate.getDate() == today.getDate())) {
    return 'Happy birthday!';
  }

  //return the date of the birthday of the current year
  let currentYearBirthday: Date = new Date(today.getFullYear() + '-' + inputDate.getMonth() + '-' + inputDate.getDate());
  return 'Your birthday is on ' + months[currentYearBirthday.getMonth()+1] + ' ' + currentYearBirthday.getDate() + ', '+ today.getFullYear();
}

btnBirthday.onclick = function() {
  //assign userBirthday value to input value
  userBirthday = document.getElementById("input--date-picker").value;
  let userBirthdayDate: Date = new Date(userBirthday + " GMT-0400");
  pBirthdayMsg.innerHTML = constructDateString(userBirthdayDate);
}

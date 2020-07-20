var date = new Date();
////////////////////////////////////////////////////////////////CALENDAR HANDLER//////////////////////////////////////////////////////////////
const loadCalendar = () => {
  // missing this line was causing the error I described in the error
  date.setDate(1);

  //index of the first WEEKDAY of the month
  const firstDayThisMonth = date.getDay();

  // index of the WEEKDAY of the last day of the month
  const lastWeekdayThisMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();

  // get number of days in the month
  const MonthDayCount = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

  // last index of last day for last month
  const lastDaysLastMonth = new Date(date.getFullYear(), date.getMonth(), 0).getDate();

  // sets the number of days to appear after the end of the month
  const nextDays = 7 - lastWeekdayThisMonth - 1;

  const months = ["January","Frbruary","March","April","May","June","July","August","September","October","November","December"];
  
  // sets the header with the month and year as in the example
  document.querySelector(".date h1").innerHTML = `${months[date.getMonth()]}, ${date.getFullYear()}`;
  
  let days = "";
  
  // this loop handles how many days appear before the first of the month
  for (let x = firstDayThisMonth; x > 0; x--) {
    days += `<div class="prev-date">${lastDaysLastMonth - x + 1}</div>`;
  }

  // this loop loads a day on the calendar for each dayof the month
  for (let i = 1; i <= MonthDayCount; i++) {
    if (
      i === new Date().getDate() && date.getMonth() === new Date().getMonth()
    ) {
      days += `<div class="today" onclick="alerting()">${i}</div>`;
    } else {
      days += `<div class="other-day" onclick="alerting()">${i}</div>`;
    }
  }
  
  // this loop handles how many days appear AFTER the calendar to keep the numbers cente
  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="next-date">${j}</div>`;
    document.querySelector(".days").innerHTML = days;
  }
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// navigating months on the calendar via the > and < icons
document.querySelector(".left").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  loadCalendar();
});
document.querySelector(".right").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  loadCalendar();
});
// 90 day modifier ////////////////////////////////////////////////////
// handle the result of the month. Again, the 
var result = 0
function clickableModifier() {
  result = date.getMonth() + 1;
}
function alerting() {
  const tempResult = date.getMonth() + 1
  if (tempResult >= result + 3 || tempResult <= result - 3) {
    alert("No bueno, outside 3 months");
  } else {
    alert("Good job, inside 3 months");
  }
};
clickableModifier();
loadCalendar();
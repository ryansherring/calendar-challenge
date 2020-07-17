const date = new Date();

const renderCalendar = () => {
  const firstDayIndex = date.getDay();
  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();
  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();
  const monthDays = document.querySelector(".days");
  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();
  const nextDays = 7 - lastDayIndex - 1;
  const months = [
    "January",
    "Frbruary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "Spetember",
    "October",
    "November",
    "December",
  ];
  document.querySelector(".date h1").innerHTML = `${months[date.getMonth()]}, ${date.getFullYear()}`;


  let days = "";
  date.setDate(1);
  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
  }

  for (let i = 1; i <= lastDay; i++) {
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      days += `<div class="today">${i}</div>`;
    } else {
      days += `<div class="other-day" onclick="alerting()" id="dayzz">${i}</div>`;

    }
  }

  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="next-date">${j}</div>`;
    monthDays.innerHTML = days;
  }
};

document.querySelector(".left").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});
document.querySelector(".right").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});

// 90 day modifier ////////////////////////////////////////////////////
var result = 0
function clickableModifier() {
  result = date.getMonth() +1;
}

function alerting() {
  const tempResult = date.getMonth() + 1
  if (tempResult >= result + 3 || tempResult <= result - 3) {
    console.log(result);
    console.log(tempResult);
    alert("outside 3 months");
  } else {
    console.log(result);
    console.log(tempResult);
    alert("inside 3 months");
  }
};
clickableModifier()
renderCalendar();
// ! Встановлення таймеру зворотнього відліку і його прибирання в кінці відліку
const content = document.querySelector('.content');
const text = document.querySelector('.text');

let counter = 10;
text.textContent = `Залишилось ${counter} секунд`;
const interval = setInterval(() => {
  counter -= 1;
  text.textContent = `Залишилось ${counter} секунд`;
  if (counter === 0) {
    clearInterval(interval);
    content.style.display = 'none';
  }
}, 1000);

// ! Календар і Електронний годинник
const arrDay = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const elements = {
  day: document.querySelector('.date-day'),
  date: document.querySelector('.date'),
  month: document.querySelector('.date-month'),
  year: document.querySelector('.date-year'),
  clock: document.querySelector('.digital-clock'),
};

setInterval(() => {
  const currentTime = new Date();

  const current = {
    currentDay: arrDay[currentTime.getDay()],
    currentDate: currentTime.getDate(),
    currentMonth: months[currentTime.getMonth()],
    currentYear: currentTime.getFullYear(),
    currentHours: currentTime.getHours(),
    currentMinute: currentTime.getMinutes(),
    currentSecond: currentTime.getSeconds(),
  };

  elements.day.textContent = current.currentDay;
  elements.date.textContent = current.currentDate;
  elements.month.textContent = current.currentMonth;
  elements.year.textContent = current.currentYear;
  elements.clock.textContent = `Time: ${formatTime(
    current.currentHours
  )}:${formatTime(current.currentMinute)}:${formatTime(current.currentSecond)}`;
}, 1000);

function formatTime(value) {
  return value.toString().padStart(2, '0');
}

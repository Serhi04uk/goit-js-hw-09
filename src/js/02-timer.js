import flatpickr from 'flatpickr';

import 'flatpickr/dist/flatpickr.min.css';

const dateEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');

let timerId = null;

const startEl = document.querySelector('[data-start]');

let timer = 0;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
      alert('Please choose a date in the future');
      startEl.disabled = true;
    } else {
      timer = selectedDates[0];
      startEl.disabled = false;
    }
  },
};

startEl.addEventListener('click', start);
const input = document.querySelector('#datetime-picker');

const markup = flatpickr('#datetime-picker', options);

function start() {
  let currentTime = Date.now();
  let delta = timer - currentTime;

  timerId = setInterval(() => {
    let currentTime = Date.now();
    delta = timer - currentTime;

    const { days, hours, minutes, seconds } = convertMs(delta);

    if (delta <= 0) {
      input.disabled = false;
      startEl.disabled = false;
      clearInterval(timerId);
      return;
    }
    dateEl.textContent = days.toString().padStart(2, '0');
    hoursEl.textContent = hours.toString().padStart(2, '0');
    minutesEl.textContent = minutes.toString().padStart(2, '0');
    secondsEl.textContent = seconds.toString().padStart(2, '0');

    input.disabled = true;
    startEl.disabled = true;
  }, 1000);
}
function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

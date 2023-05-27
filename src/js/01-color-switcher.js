function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonStart = document.querySelector('[data-start]');
const buttonStop = document.querySelector('[data-stop]');
const body = document.body;

buttonStart.addEventListener('click', start);
buttonStop.addEventListener('click', stop);

let interval = null;
let stopDis = (buttonStop.disabled = true);

function start() {
  interval = setInterval(() => {
    const color = getRandomHexColor();
    body.style.background = color;
  }, 1000);
  buttonStart.disabled = true;
  stopDis = buttonStop.disabled = false;
}

function stop() {
  clearInterval(interval);
  stopDis = buttonStop.disabled = true;
  buttonStart.disabled = false;
}

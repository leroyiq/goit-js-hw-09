const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const bodyId = document.querySelector('body');
let timerId = null;

startBtn.addEventListener('click', () => {
  timerId = setInterval(() => {
    getRandomHexColor();
    startBtn.setAttribute('disabled', 'disabled');
    stopBtn.removeAttribute('disabled');
  }, 1000);
});

stopBtn.addEventListener('click', () => {
  clearInterval(timerId);
  startBtn.removeAttribute('disabled');
  stopBtn.setAttribute('disabled', 'disabled');
});

function getRandomHexColor() {
  return (bodyId.style.background = `#${Math.floor(
    Math.random() * 16777215
  ).toString(16)}`);
}

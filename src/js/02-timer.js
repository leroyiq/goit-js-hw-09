import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const inputRef = document.querySelector('#datetime-picker');
const startBtnRef = document.querySelector('button[data-start]');
const days = document.querySelector('span[data-days]');
const hours = document.querySelector('span[data-hours]');
const min = document.querySelector('span[data-minutes]');
const sec = document.querySelector('span[data-seconds]');

startBtnRef.setAttribute('disabled', 'disabled');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    if (selectedDates[0] > new Date()) {
      return startBtnRef.removeAttribute('disabled');
    }
    Notiflix.Notify.init({
      width: '280px',
      position: 'right-top', // 'right-top' - 'right-bottom' - 'left-top' - 'left-bottom' - 'center-top' - 'center-bottom' - 'center-center'
      distance: '10px',
      opacity: 1,
      borderRadius: '5px',
      rtl: false,
      timeout: 3000,
      messageMaxLength: 110,
      backOverlay: false,
      backOverlayColor: 'rgba(255,99,71,0.5)',
      plainText: true,
      showOnlyTheLastOne: false,
      clickToClose: false,
      pauseOnHover: true,

      ID: 'NotiflixNotify',
      className: 'notiflix-notify',
      zindex: 4001,
      fontFamily: 'Quicksand',
      fontSize: '13px',
      cssAnimation: true,
      cssAnimationDuration: 400,
      cssAnimationStyle: 'zoom', // 'fade' - 'zoom' - 'from-right' - 'from-top' - 'from-bottom' - 'from-left'
      closeButton: false,
      useIcon: true,
      useFontAwesome: false,
      fontAwesomeIconStyle: 'basic', // 'basic' - 'shadow'
      fontAwesomeIconSize: '34px',

      failure: {
        svgColor: '#ff5549',
        titleColor: '#1e1e1e',
        messageColor: '#242424',
        buttonBackground: '#ff5549',
        buttonColor: '#fff',
        backOverlayColor: 'rgba(255,85,73,0.2)',
      },
    });
    Notiflix.Notify.failure('Please choose a date in the future');
  },
};

flatpickr(inputRef, options);

const dataPickr = new flatpickr(inputRef, options);

startBtnRef.addEventListener('click', startFn);

function startFn() {
  startBtnRef.setAttribute('disabled', 'disabled');
  const startTime = dataPickr.selectedDates[0];

  setInterval(() => {
    const currentTime = Date.now();
    const deltaTime = startTime - currentTime;

    const time = convertMs(deltaTime);

    days.textContent = time.days;
    hours.textContent = time.hours;
    min.textContent = time.minutes;
    sec.textContent = time.seconds;
  }, 1000);
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = addLeadingZero(Math.floor(ms / day));
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

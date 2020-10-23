const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const countdown = document.getElementById("countdown");
const year = document.getElementById("year");
const loading = document.getElementById("loading");

const currentYear = new Date().getFullYear();
const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);

// set background year
year.innerText = currentYear + 1;

// update timer
function updateCountdown() {
  const currentTime = new Date();
  const diff = newYearTime - currentTime;

  const day = Math.floor(diff / 1000 / 60 / 60 / 24);
  const hour = Math.floor(diff / 1000 / 60 / 60) % 24;
  const min = Math.floor(diff / 1000 / 60) % 60;
  const sec = Math.floor(diff / 1000) % 60;

  days.innerHTML = day;
  hours.innerHTML = hour < 10 ? "0" + hour : hour;
  minutes.innerHTML = min < 10 ? "0" + min : min;
  seconds.innerHTML = sec < 10 ? "0" + sec : sec;
}

// show spinner while loading
setTimeout(() => {
  loading.remove();
  countdown.style.display = "flex";
}, 1000);

// run every second
setInterval(updateCountdown, 1000);

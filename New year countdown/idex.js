const day1 = document.getElementById("day");
const hour1 = document.getElementById("hour");
const minute1 = document.getElementById("minute");
const second1 = document.getElementById("second");
const newyear = new Date("Jan 1,2024 00:00:00").getTime();

updatecountdown();
function updatecountdown() {
  const now = new Date().getTime();
  const gap = newyear - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const d = Math.floor(gap / day);
  const h = Math.floor((gap % day) / hour);
  const m = Math.floor((gap % hour) / minute);
  const s = Math.floor((gap % minute) / second);

  day1.innerText = d;
  hour1.innerText = h;
  minute1.innerText = m;
  second1.innerText = s;

  setTimeout(updatecountdown, 1000);
}

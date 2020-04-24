function clock(){
const hours = document.querySelector('.hour-number');
const minutes = document.querySelector('.minute-number');
const seconds = document.querySelector('.sec2');

const hour = new Date().getHours();
const mins = new Date().getMinutes();
const secs = new Date().getSeconds();

hours.innerHTML = hour;
minutes.innerHTML = mins;
seconds.innerHTML = secs;
}
var interval = setInterval(clock, 1000);
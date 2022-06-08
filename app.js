//elements from DOM
const desc = document.getElementById("desc");

let duration = 0;

function countDown() {

  //times : start(time in the future) | end(today)
  let end = Date.now();
  let start = Date.parse("2022-09-11T08:00:00");

  //duration : difference between start and end
  let duration = start - end;

  //conversion timestamp to date
  let days = Math.floor(duration / (1000 * 60 * 60 * 24));
  let hours = Math.floor((duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
  let secondes = Math.floor((duration % (1000 * 60)) / 1000);

//   let allDuration = `${days} days ${hours} hours ${minutes} minutes ${secondes} secondes`;

//Send timestamp converted to DOM
  document.getElementById('days').textContent = days;
  document.getElementById('hours').textContent = hours;
  document.getElementById('minutes').textContent = minutes;
  document.getElementById('secondes').textContent = secondes;

    /*console.log(allDuration);
    console.log(days,hours,minutes,secondes);
    console.log(`Date d'aujourd'hui : ${end}`);
    console.log(`Date de départ(futur) : ${start}`);
    console.log(duration);*/

// if the countdown equal to 0 , user get notified
  if(duration <= 0) {
      clearInterval;
      document.getElementById('isDone').innerHTML = `<div class="alert alert-primary intro">It's Finished !</div>`;
  }
}

// setInterval for countdown duration all 1seconds
let intervalDown = setInterval(() => {
  countDown()
  , 1000});

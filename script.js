window.onload = () => {
  var interval;
  var minutes = 00;
  var seconds = 00;
  var tens = 00;
  var minutesUpdate = document.getElementById('minutes');
  var secondsUpdate = document.getElementById('seconds');
  var tensUpdate = document.getElementById('tens');

  
  start = () => {
    clearInterval(interval)
    interval = setInterval(startTimer, 10);
  }

  stop = () => {
    clearInterval(interval);
  }

  reset = () => {
    clearInterval(interval);
    tens = "00";
    seconds = "00";
    minutes = "00"
    tensUpdate.innerHTML = tens;
    secondsUpdate.innerHTML = seconds;
    minutesUpdate.innerHTML = minutes;
  }

  startTimer = () => {
    tens++

    if(tens <= 9){
      tensUpdate.innerHTML = "0" + tens;
    }

    if(tens > 9){
      tensUpdate.innerHTML = tens;
    }

    if(tens > 99){
      seconds++
      secondsUpdate.innerHTML = "0" + seconds;
      tens = 0
      tensUpdate.innerHTML = "0" + 0;
    }

    if(seconds > 9){
      secondsUpdate.innerHTML = seconds;
    }

    if(seconds > 59){
      minutes++;
      minutesUpdate.innerHTML = "0" + minutes;
      seconds = 0;
      secondsUpdate.innerHTML = "0" + 0;
    }

    if(minutes > 9){
      minutesUpdate.innerHTML = minutes;
    }
  }
}

function darkMode(){
  var body = document.body;
  var moon = document.getElementById("moonToggle");
  var btn = document.getElementById("btnToggle")
  body.classList.toggle("dark-mode");
  moon.classList.toggle("moon-toggle");
  btn.classList.toggle("btn-toggle")
}
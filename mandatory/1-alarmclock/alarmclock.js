function setAlarm() {
  let inputBox = document.getElementById("alarmSet");
  let timer = document.getElementById("timeRemaining");
  document.getElementById("set").disabled = true;
  if (parseInt(inputBox.value) <= 0) {
    return 
  } 
  let setTimer = setInterval(function() {
    //decrementing timer
    inputBox.value--;
    //changing the timer
    timer.innerText = "Time Remaining: " + "00:" + inputBox.value;
    //add a conditional for the timer to stop at 0
    if (inputBox.value === "0") {
      clearInterval(setTimer)
      // play alarm sound at 0
      playAlarm(); 
      document.getElementById("set").disabled = false;
}
  }, 1000); 





}



// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;

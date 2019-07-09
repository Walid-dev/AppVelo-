let countdown;
const timerDisplay = document.querySelector(".display-timer");
const endTimeDisplay = document.querySelector(".display-end_time");

class Timer {
  constructor(seconds) {
    this.seconds = seconds;
    this.displayTimeLeft = function(seconds) {
      const minutes = Math.floor(seconds / 60);
      const remainderSeconds = seconds % 60;
      const display = `${minutes}:${remainderSeconds < 10 ? "0" : ""}${remainderSeconds}`;
      timerDisplay.textContent = display;
    };

    this.displayEndTime = function(timestamp) {
      const end = new Date(timestamp);
      const hour = end.getHours();
      const minutes = end.getMinutes();
      endTimeDisplay.textContent = `Expire à ${hour < 12 ? "0" : ""}${hour}:${minutes < 10 ? "0" : ""}${minutes}`;
    };
    this.timer = function(seconds) {
      const now = Date.now();
      const then = now + seconds * 1000;
      displayTimeLeft(seconds);
      displayEndTime(then);

      countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        // Check if we should stop it
        if (secondsLeft < 0) {
          clearInterval(countdown);
          alert("Expired");
          return;
        }
        // Display it
        displayTimeLeft(secondsLeft);
      }, 1000);
    };
  }
}

const timerNew = new Timer(200);
timer(200);

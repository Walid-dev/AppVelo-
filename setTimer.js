class Timer {
    constructor(seconds) {
        let countdown;
        // Timer container
        const timerDisplay = document.querySelector(".display-timer");
        // End Time container
        const endTimeDisplay = document.querySelector(".display-end_time");
        const now = Date.now();
        const then = now + seconds * 1000;
        displayTimeLeft(seconds);
        displayEndTime(then);

        countdown = setInterval(() => {
            const secondsLeft = Math.round((then - Date.now()) / 1000);
            // Check if we should stop it
            if (secondsLeft < 0) {
                clearInterval(countdown);
                alert("Reservation expirée.");
                return;
            }
            // Display it
            displayTimeLeft(secondsLeft);
        }, 1000);

        function displayTimeLeft(seconds) {
            const minutes = Math.floor(seconds / 60);
            const remainderSeconds = seconds % 60;
            const display = `${minutes}:${remainderSeconds < 10 ? "0" : ""}${remainderSeconds}`;
            timerDisplay.textContent = display;
        }

        function displayEndTime(timestamp) {
            const end = new Date(timestamp);
            const hour = end.getHours();
            const minutes = end.getMinutes();
            endTimeDisplay.textContent = `Expire à ${hour < 10 ? "0" : ""}${hour}:${minutes < 10 ? "0" : ""}${minutes}`;
        }
    }
}

// const newTimer = new Timer(1200);

class Timer {
    constructor(seconds) {
        let countdown;
        // Timer container
        const timerDisplay = document.querySelector(".display-timer");
        // End Time container
        const endTimeDisplay = document.querySelector(".display-end_time");
        // Get the current time
        const now = Date.now();
        const then = now + seconds * 1000;
        displayTimeLeft(seconds);
        displayEndTime(then);

        this.countdown = setInterval(() => {
            const secondsLeft = Math.round((then - Date.now()) / 1000);
            // Check if we should stop it -> Session Expired
            if (secondsLeft < 0) {
                clearInterval(this.countdown);
                alert("Réservation expirée.");
                sessionStorage.clear();
                location.reload();
            }

            // Display it
            displayTimeLeft(secondsLeft);
            console.log(secondsLeft);
            sessionStorage.setItem("second_left", secondsLeft);
        }, 1000);

        $("#cancelResa").click(function(e) {
            e.preventDefault();
            clearInterval(this.countdown);
            sessionStorage.clear();
            console.log("clicked on timer.js");
        });

        // Display time left before expiration

        function displayTimeLeft(seconds) {
            const minutes = Math.floor(seconds / 60);
            const remainderSeconds = seconds % 60;
            const display = "Temps restant : " + `${minutes}:${remainderSeconds < 10 ? "0" : ""}${remainderSeconds}`;
            timerDisplay.textContent = display;
        }

        // Display the time of the end of the reservation
        function displayEndTime(timestamp) {
            const end = new Date(timestamp);
            const hour = end.getHours();
            const minutes = end.getMinutes();
            // Convert time
            endTimeDisplay.textContent = `Expire à ${hour < 10 ? "0" : ""}${hour}:${minutes < 10 ? "0" : ""}${minutes}`;
        }
    }
}

// const newTimer = new Timer(1200);

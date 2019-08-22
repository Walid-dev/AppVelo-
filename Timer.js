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

        // Set the countdown
        this.countdown = setInterval(() => {
            const secondsLeft = Math.round((then - Date.now()) / 1000);
            // Check if we should stop the timer -> Session Expired
            if (secondsLeft < 0) {
                clearInterval(this.countdown);
                alert("Réservation expirée.");
                sessionStorage.clear();
                location.reload();
            }
            // Display it
            displayTimeLeft(secondsLeft);
            // Set the countdown seconds left on the sessionStorage
            sessionStorage.setItem("second_left", secondsLeft);
        }, 1000);

        // Cancel the countdown if the reservation is cancelled
        $("#cancelResa").click(function(e) {
            e.preventDefault();
            clearInterval(this.countdown);
            sessionStorage.clear();
        });

        // Display time left before reservation expiration
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

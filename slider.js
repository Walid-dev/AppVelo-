class Slider {
    constructor() {
        const carouselSlide = document.querySelector(".carousel-slide");
        const carouselImages = document.querySelectorAll(".carousel-slide img");

        // Set the playPause Interval
        var playPause = setInterval(function autoPlay() {
            nextBtn.click();
        }, 6000);

        // Play status
        let play = true;

        // Set slider buttons
        const nextBtn = document.querySelector("#nextBtn");
        const pauseBtn = document.querySelector("#pauseBtnContainer");
        const prevBtn = document.querySelector("#prevBtn");

        let playAndPauseText = document.getElementById("pauseBtn").innerHTML;

        // Set the pause button
        pauseBtn.addEventListener("click", () => {
            if (play) {
                playPause = clearInterval(playPause);
                play = false;
                document.getElementById("pauseBtn").innerHTML = "Play";
            } else {
                playPause = setInterval(function autoPlay() {
                    nextBtn.click();
                }, 6000);
                play = true;
                document.getElementById("pauseBtn").innerHTML = "Pause";
                playAndPauseText = "Play";
            }
        });

        // Set the counter
        let counter = 1;
        const size = carouselImages[0].clientWidth;

        // Hide and display the slider text container
        function displaySliderText() {
            if (counter == 2) {
                $(".carousel-text-container").fadeOut(800);
            } else {
                $(".carousel-text-container").fadeIn(800);
            }
        }

        carouselSlide.style.transform = "translateX(" + -100 * counter + "%)";

        // Buttons Next and Previous -> switches slides onclick using transform transition in CSS

        nextBtn.addEventListener("click", () => {
            if (counter >= carouselImages.length - 1) return;
            carouselSlide.style.transition = "transform 1s ease";
            clearInterval(playPause);
            playPause = setInterval(function autoPlay() {
                nextBtn.click();
            }, 6000);
            counter++;
            carouselSlide.style.transform = "translateX(" + -100 * counter + "%)";
            displaySliderText();
        });

        prevBtn.addEventListener("click", () => {
            playAndPauseText = "Play";
            if (counter <= 0) return;
            carouselSlide.style.transition = "transform 1s ease";
            clearInterval(playPause);
            playPause = setInterval(function autoPlay() {
                nextBtn.click();
            }, 6000);
            counter--;
            carouselSlide.style.transform = "translateX(" + -100 * counter + "%)";
            displaySliderText();
        });

        carouselSlide.addEventListener("transitionend", () => {
            if (carouselImages[counter].id === "lastClone") {
                carouselSlide.style.transition = "none";
                counter = carouselImages.length - 2;
                carouselSlide.style.transform = "translateX(" + -100 * counter + "%)";
            }
        });

        carouselSlide.addEventListener("transitionend", () => {
            if (carouselImages[counter].id === "firstClone") {
                carouselSlide.style.transition = "none";
                counter = carouselImages.length - counter;
                carouselSlide.style.transform = "translateX(" + -100 * counter + "%)";
            }
        });

        // Switches Slider images with the keybord
        document.onkeydown = function(event) {
            switch (event.keyCode) {
                case 37:
                    if (counter <= 0) return;
                    carouselSlide.style.transition = "transform 1s ease";
                    counter--;
                    carouselSlide.style.transform = "translateX(" + -100 * counter + "%)";
                    displaySliderText();
                    clearInterval(playPause);
                    break;
                case 39:
                    if (counter >= carouselImages.length - 1) return;
                    carouselSlide.style.transition = "transform 1s ease";
                    counter++;
                    carouselSlide.style.transform = "translateX(" + -100 * counter + "%)";
                    displaySliderText();
                    clearInterval(playPause);
                    break;
            }
        };
    }
}

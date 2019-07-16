class Slider {
    constructor(carouselSlide, carouselImages, nextBtn, pauseBtn, prevBtn) {
        this.carouselSlide = document.querySelector(carouselSlide);
        this.carouselImages = document.querySelectorAll(carouselImages);
        this.nextBtn = document.querySelector(nextBtn);
        this.pauseBtn = document.querySelector(pauseBtn);
        this.prevBtn = document.querySelector(prevBtn);

        var playPause = setInterval(function autoPlay() {
            this.nextBtn.click();
        }, 5000);
        let play = true;

        // Buttons

        // Auto Slide Function function

        this.pauseBtn.addEventListener("click", () => {
            if (play) {
                playPause = clearInterval(playPause);
                play = false;
            } else {
                playPause = setInterval(function autoPlay() {
                    this.nextBtn.click();
                }, 5000);
                play = true;
            }
        });

        //Counter

        let counter = 1;
        const size = this.carouselImages[0].clientWidth;

        this.carouselSlide.style.transform = "translateX(" + -100 * counter + "%)";

        //Button Listeners

        this.nextBtn.addEventListener("click", () => {
            if (counter >= this.carouselImages.length - 1) return;
            this.carouselSlide.style.transition = "transform 1s ease-in-out";
            counter++;
            this.carouselSlide.style.transform = "translateX(" + -100 * counter + "%)";
        });

        this.prevBtn.addEventListener("click", () => {
            if (counter <= 0) return;
            this.carouselSlide.style.transition = "transform 1s ease-in-out";
            counter--;
            this.carouselSlide.style.transform = "translateX(" + -100 * counter + "%)";
        });

        this.carouselSlide.addEventListener("transitionend", () => {
            //console.log(this.carouselImages[counter]);
            if (this.carouselImages[counter].id === "lastClone") {
                this.carouselSlide.style.transition = "none";
                counter = this.carouselImages.length - 2;
                this.carouselSlide.style.transform = "translateX(" + -100 * counter + "%)";
            }
        });

        this.carouselSlide.addEventListener("transitionend", () => {
            if (this.carouselImages[counter].id === "firstClone") {
                this.carouselSlide.style.transition = "none";
                counter = this.carouselImages.length - counter;
                this.carouselSlide.style.transform = "translateX(" + -100 * counter + "%)";
            }
        });

        document.onkeydown = function(event) {
            switch (event.keyCode) {
                case 37:
                    if (counter <= 0) return;
                    this.carouselSlide.style.transition = "transform 1s ease-in-out";
                    counter--;
                    this.carouselSlide.style.transform = "translateX(" + -100 * counter + "%)";
                    break;
                case 39:
                    if (counter >= this.carouselImages.length - 1) return;
                    this.carouselSlide.style.transition = "transform 1s ease-in-out";
                    counter++;
                    this.carouselSlide.style.transform = "translateX(" + -100 * counter + "%)";
                    break;
            }
        };
    }
}

const SliderHeader = new Slider(".carousel-slide", ".carousel-slide img", "#nextBtn", "#pauseBtn", "#prevBtn");

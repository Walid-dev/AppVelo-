// Get the current time
let today = new Date();
let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

// Set some variables
const cityNameInp = document.querySelector("#cityNameInp");
const searchBtn = document.querySelector("#searchBtn");

// Check set and display the timer and the home if there's already a reservation
function setTimerOnLoad() {
    $(".resa_already_done").hide();
    if (sessionStorage.second_left > 0) {
        $(".choose_station").hide();
        $(".resa_already_done").show();
        $("#mapBox").fadeOut();
        const timerOnLoad = new Timer(sessionStorage.second_left);
        document.querySelector(".name_field_timer").innerHTML = "Une réservation est déjà en cours";
        $("#cancelResa").click(function(e) {
            e.preventDefault();
            console.log("clicked");
            clearInterval(timerOnLoad.countdown);
            sessionStorage.clear();
            document.querySelector(".name_field_timer").innerHTML = "La réservation à été annulé";
            document.querySelector(".display-timer").innerHTML = "";
            document.querySelector(".display-end_time").innerHTML = "";
            $(".choose_station").show();
            $(".resa_already_done").hide();
            $("#mapBox").fadeIn(450);
        });
    } else {
        document.querySelector(".name_field_timer").innerHTML = "Pas de réservation en cours.";
    }
}

window.onload = setTimerOnLoad();

const homeSlider = new Slider();

// Get the data of Nantes city from JCDecaux Api
const cityJcdData = new GetJcdecauxData("0765a9c499d7bbb55e963e4f6977e3ac9d3094c4", "nantes");
cityJcdData.displayData();

// Store the promise we got from the JCDecaux Api in a variable
const jcdPromise = cityJcdData.getPromise;

// Create a new Map using leaflet map Api
const displayNewMap = new CreateMap(
    "mapid",
    "10",
    "pk.eyJ1Ijoid2xhZDM0IiwiYSI6ImNqeHA5N25qYTBhZnozbmwzMmdmczBtcGoifQ.hYSWIqrFTCmtKzfE56Y4iw"
);

// Refresh the data each minutes
setInterval(() => {
    cityJcdData.displayData();
    displayNewMap;
    console.log("data refreshed");
}, 60000);

// Check the user submitted values and store them in localStorage
const submittedValues = new CheckInputValues();
submittedValues.checkIfString();
submittedValues.setInputsValues();
submittedValues.saveUserData();

// Create Canvas with the canvas-box ID the height and width
const newCanvas = new CreateCanvas("canvasDiv", "480px", "280px");

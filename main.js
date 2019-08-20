let today = new Date();
let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

function setTimerOnLoad() {
    $(".resa_already_done").hide();
    if (sessionStorage.second_left > 0) {
        $(".choose_station").hide();
        $(".resa_already_done").show();
        $("#mapBox").fadeOut();
        const timerOnLoad = new Timer(sessionStorage.second_left);
        document.querySelector(".name_field_timer").innerHTML = "Une réservation est déja en cours";
        $("#cancelResa").click(function(e) {
            e.preventDefault();
            console.log("clicked");
            clearInterval(timerOnLoad.countdown);
            sessionStorage.clear();
            document.querySelector(".name_field_timer").innerHTML = "La réservation à été annulée";
            document.querySelector(".display-timer").innerHTML = "";
            document.querySelector(".display-end_time").innerHTML = "";
            $(".choose_station").show();
            $(".resa_already_done").hide();
            $("#mapBox").fadeIn(450);
        });
    }
}

window.onload = setTimerOnLoad();

//const cityNameInp = document.getElementById("cityNameInput");
//const searchBtn = document.querySelector(".searchButton");

const cityNameInp = document.querySelector("#cityNameInp");
const searchBtn = document.querySelector("#searchBtn");

const cityJcdData = new GetJcdecauxData("0765a9c499d7bbb55e963e4f6977e3ac9d3094c4", "nantes");
cityJcdData.displayData();

setInterval(() => {
    cityJcdData.displayData();
}, 5000);

const jcdPromise = cityJcdData.getPromise;
const displayNewMap = new CreateMap(
    "mapid",
    "10",
    "pk.eyJ1Ijoid2xhZDM0IiwiYSI6ImNqeHA5N25qYTBhZnozbmwzMmdmczBtcGoifQ.hYSWIqrFTCmtKzfE56Y4iw"
);

const saveData1 = new StoreUserData();
const submittedValues = new CheckInputValues();

submittedValues.checkIfString();

submittedValues.StoreUserData;

if (submittedValues) {
    console.log(submittedValues.isCanvasOff);
}

// Create Canvas with the canvas-box ID the height and width
const newCanvas = new CreateCanvas("canvasDiv", "480px", "280px");

const storeBookingData = new SessionStorage();

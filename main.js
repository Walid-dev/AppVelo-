// Events Listeners

//const cityNameInp = document.getElementById("cityNameInput");
//const searchBtn = document.querySelector(".searchButton");

const cityNameInp = document.querySelector("#cityNameInp");
const searchBtn = document.querySelector("#searchBtn");

const cityJcdData = new GetJcdecauxData("0765a9c499d7bbb55e963e4f6977e3ac9d3094c4", "nantes");
cityJcdData.displayData();

setInterval(() => {
    cityJcdData.displayData();
    console.log("refreshed in main.js with displayData()");
}, 5000);

const jcdPromise = cityJcdData.getPromise;
const displayNewMap = new CreateMap(
    "mapid",
    "10",
    "pk.eyJ1Ijoid2xhZDM0IiwiYSI6ImNqeHA5N25qYTBhZnozbmwzMmdmczBtcGoifQ.hYSWIqrFTCmtKzfE56Y4iw"
);

displayNewMap.testOut();

const saveData1 = new StoreUserData();
const submittedValues = new CheckInputValues();

submittedValues.checkIfString();

submittedValues.StoreUserData;

// Create Canvas with the canvas-box ID the height and width
const newCanvas = new CreateCanvas("canvasDiv", "480px", "280px");

const storeBookingData = new SessionStorage();

// Events Listeners

//const cityNameInp = document.getElementById("cityNameInput");
//const searchBtn = document.querySelector(".searchButton");

const cityNameInp = document.querySelector("#cityNameInp");
const searchBtn = document.querySelector("#searchBtn");

const cityJcdData = new GetJcdecauxData("0765a9c499d7bbb55e963e4f6977e3ac9d3094c4", "nantes");
cityJcdData.displayData();

const jcdPromise = cityJcdData.getPromise;
const jcdData = cityJcdData.data;

const displayNewMap = new CreateMap(
    "mapid",
    "10",
    "pk.eyJ1Ijoid2xhZDM0IiwiYSI6ImNqeHA5N25qYTBhZnozbmwzMmdmczBtcGoifQ.hYSWIqrFTCmtKzfE56Y4iw"
);
//function searchBtnOnClick() {
//    searchBtn.addEventListener("click", () => {
// Démarrer Timer
// const newTimer = new Timer(1200);
//       console.log(cityNameInp.value);
//   });
//}

//searchBtnOnClick();

console.log(cityJcdData.cityNameValue);

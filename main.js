// Events Listeners

//const cityNameInp = document.getElementById("cityNameInput");
//const searchBtn = document.querySelector(".searchButton");

const cityNameInp = document.querySelector("#cityNameInp");
const searchBtn = document.querySelector("#searchBtn");

function searchBtnOnClick() {
    searchBtn.addEventListener("click", () => {
        // Démarrer Timer
        // const newTimer = new Timer(1200);
        console.log(cityNameInp.value);
    });
}

searchBtnOnClick();

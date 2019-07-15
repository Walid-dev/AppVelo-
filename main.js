// Events Listeners

//const cityNameInp = document.getElementById("cityNameInput");
//const searchBtn = document.querySelector(".searchButton");

const cityNameInp = document.querySelector("#cityNameInp");
const searchBtn = document.querySelector("#searchBtn");

const toulouseJcdData = new GetJcdecauxData("0765a9c499d7bbb55e963e4f6977e3ac9d3094c4");
toulouseJcdData.getData.then(function(result) {
    console.log(result);
});

function searchBtnOnClick() {
    searchBtn.addEventListener("click", () => {
        console.log(cityNameInp.value);
        const cityJcdData = new GetJcdecauxData("0765a9c499d7bbb55e963e4f6977e3ac9d3094c4", "toulouse");
        cityJcdData.getData.then(function(result) {
            console.log(result);
        });
    });
}

searchBtnOnClick();

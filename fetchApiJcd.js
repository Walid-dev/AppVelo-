const rest_api = `https://api.jcdecaux.com/vls/v1/stations?contract=toulouse&apiKey=0765a9c499d7bbb55e963e4f6977e3ac9d3094c4`;

class FetchDataWithButton {
    constructor(mapSelector, buttonSelector, app_id) {
        this.mapSelector = document.querySelector(`${mapSelector}`);
        this.buttonSelector = document.querySelector(`${buttonSelector}`);
        this.AppId = app_id;
        this.result1 = [];
        this.result2 = [];
        this.fetchData = function() {
            const fetchCityName = async (city) => {
                const api_call = await fetch(`https://api.jcdecaux.com/vls/v1/stations?contract=${city}&apiKey=${this.AppId}`);
                const data = await api_call.json();
                return { data };
            };
            const showData = () => {
                fetchCityName(this.mapSelector.value).then((res) => {
                    this.res = res;
                    this.result1.state = res.data[0].position.lat;
                    this.result2.state = res.data[0].position.lng;
                    console.log(res);
                    console.log(res.data[0].name);
                    console.log(this.res);
                    console.log(this.result1);
                    console.log(this.result2);
                });
            };

            this.buttonSelector.addEventListener("click", () => {
                showData();
            });
        };
    }
}

const fetchNewCityName = new FetchDataWithButton("#search", ".searchButton", "0765a9c499d7bbb55e963e4f6977e3ac9d3094c4");

fetchNewCityName.fetchData();

console.log(fetchNewCityName.result1);
console.log(fetchNewCityName.result2);

const toulouseMap = new CreateMap(
    "mapid",
    43.6043,
    1.4437,
    13,
    "pk.eyJ1Ijoid2xhZDM0IiwiYSI6ImNqeHA5N25qYTBhZnozbmwzMmdmczBtcGoifQ.hYSWIqrFTCmtKzfE56Y4iw"
);
toulouseMap.displayMap();

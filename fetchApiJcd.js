const rest_api = `https://api.jcdecaux.com/vls/v1/stations?contract=toulouse&apiKey=0765a9c499d7bbb55e963e4f6977e3ac9d3094c4`;

class FetchDataWithButton {
    constructor(mapSelector, buttonSelector, app_id, data, stations) {
        this.mapSelector = document.querySelector(`${mapSelector}`);
        this.buttonSelector = document.querySelector(`${buttonSelector}`);
        this.AppId = app_id;
        this.data = data;
        this.stations = stations;
        this.fetchData = function() {
            this.buttonSelector.addEventListener("click", () => {
                fetchCityName();
            });
            const fetchCityName = async () => {
                const api_call = await fetch(
                    `https://api.jcdecaux.com/vls/v1/stations?contract=${this.mapSelector.value}&apiKey=${this.AppId}`
                );
                this.data = await api_call.json();
                const filtered = this.data.filter((station) => station);
                const items = filtered.map((station) => {
                    stations = { station: station };
                    console.log(station.position);
                    return stations;
                });

                console.log(items);
                console.log(this.data);
            };
        };
    }
}

const fetchNewCityName = new FetchDataWithButton("#search", ".searchButton", "0765a9c499d7bbb55e963e4f6977e3ac9d3094c4");

fetchNewCityName.fetchData();

console.log(fetch);

const toulouseMap = new CreateMap(
    "mapid",
    43.6043,
    1.4437,
    13,
    "pk.eyJ1Ijoid2xhZDM0IiwiYSI6ImNqeHA5N25qYTBhZnozbmwzMmdmczBtcGoifQ.hYSWIqrFTCmtKzfE56Y4iw"
);
toulouseMap.displayMap();

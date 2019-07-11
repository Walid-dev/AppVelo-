const toulouseMap = new CreateMap(
    "mapid",
    43.6043,
    1.4437,
    13,
    "pk.eyJ1Ijoid2xhZDM0IiwiYSI6ImNqeHA5N25qYTBhZnozbmwzMmdmczBtcGoifQ.hYSWIqrFTCmtKzfE56Y4iw"
);
toulouseMap.displayMap();

class FetchDataWithButton {
    constructor(inputValue, searchButton, app_id) {
        this.inputValue = document.querySelector(`${inputValue}`);
        this.searchButton = document.querySelector(`${searchButton}`);
        this.AppId = app_id;
        this.fetchData = function(data) {
            const fetchCityName = async city => {
                const api_call = await fetch(`https://api.jcdecaux.com/vls/v1/stations?contract=${city}&apiKey=${this.AppId}`);
                const data = await api_call.json();
                return { data };
            };
            const showData = () => {
                fetchCityName(this.inputValue.value).then(res => {
                    console.log(res);
                    console.log(res.data[0].name);
                    console.log(this.wech);
                });
            };

            this.searchButton.addEventListener("click", () => {
                showData();
            });
        };
    }
}

const fetchNewCityName = new FetchDataWithButton("#search", ".searchButton", "0765a9c499d7bbb55e963e4f6977e3ac9d3094c4");

fetchNewCityName.fetchData();

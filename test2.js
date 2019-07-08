class FetchDataWithButton {
  constructor(inputValue, searchButton, app_id) {
    this.inputValue = document.querySelector(`${inputValue}`);
    this.searchButton = document.querySelector(`${searchButton}`);
    this.AppId = app_id;
    this.fetchData = function(data, available_bike_stands, adress) {
      const fetchCityName = async city => {
        adress;
        available_bike_stands;
        data;
        const api_call = await fetch(`https://api.jcdecaux.com/vls/v1/stations?contract=${city}&apiKey=${this.AppId}`);
        this.data = await api_call.json();
        this.available_bike_stands = this.data[0].available_bike_stands;
        return { data: this.data };
      };

      const showData = () => {
        fetchCityName(this.inputValue.value).then(res => {
          console.log(res);
          console.log(this.available_bike_stands);
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
console.log(fetchNewCityName.fetchData(this.data, this.available_bike_stands));

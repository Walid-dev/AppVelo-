class FetchDataWithButton {
  constructor(inputValue, searchButton, app_id) {
    this.inputValue = document.querySelector(`${inputValue}`);
    this.searchButton = document.querySelector(`${searchButton}`);
    this.AppId = app_id;
    this.fetchData = function(data, wech) {
      this.data = data;
      this.wech = "how";
      const fetchCityName = async city => {
        wech;
        const api_call = await fetch(`https://api.jcdecaux.com/vls/v1/stations?contract=${city}&apiKey=${this.AppId}`);
        const data = await api_call.json();
        return { data };
      };
      const showData = () => {
        fetchCityName(this.inputValue.value).then(res => {
          console.log(res);
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
console.log(fetchNewCityName.fetchData(this.data, this.wech));

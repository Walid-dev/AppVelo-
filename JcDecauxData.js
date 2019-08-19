// Setting the class to get the JcDecaux Api data
class GetJcdecauxData {
    constructor(apiKey, cityNameValue, latitude, data, number) {
        this.displayData = function() {
            this.apiKey = apiKey;
            this.cityNameValue = cityNameValue;

            this.data = data;
            this.text = document.querySelector(".text");
            this.latitude = latitude;
            this.number = number;

            // Api Calling with fetch method and get the promise
            this.getPromise = fetch(
                `https://api.jcdecaux.com/vls/v1/stations?contract=${this.cityNameValue}&apiKey=${this.apiKey}`
            ).then((response) => response.json());

            // Ready to use the data from the promise
        };
    }
}

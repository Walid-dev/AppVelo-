// Setting the class to get the JcDecaux Api data
class GetJcdecauxData {
    constructor(apiKey, cityNameValue) {
        this.displayData = function() {
            this.apiKey = apiKey;
            this.cityNameValue = cityNameValue;
            // Api Calling with fetch method and get the promise
            this.getPromise = fetch(
                `https://api.jcdecaux.com/vls/v1/stations?contract=${this.cityNameValue}&apiKey=${this.apiKey}`
            ).then((response) => response.json());

            // Ready to use the data from the promise
        };
    }
}

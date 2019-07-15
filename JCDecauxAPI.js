class GetJcdecauxData {
    constructor(apiKey, cityNameValue) {
        this.apiKey = apiKey;
        this.cityNameValue = cityNameValue;
        this.cityNameValue = cityNameInp.value;
        this.getData = fetch(
            `https://api.jcdecaux.com/vls/v1/stations?contract=${this.cityNameValue}&apiKey=${this.apiKey}`
        ).then((response) => response.json());
    }
}

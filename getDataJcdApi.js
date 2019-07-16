class GetJcdecauxData {
    constructor(apiKey, cityNameValue, latitude, data, number) {
        this.apiKey = apiKey;
        this.cityNameValue = cityNameValue;
        this.cityNameValue = cityNameInp.value;
        this.data = data;
        this.text = document.querySelector(".text");
        this.latitude = latitude;
        this.number = number;
        this.getPromise = fetch(
            `https://api.jcdecaux.com/vls/v1/stations?contract=${this.cityNameValue}&apiKey=${this.apiKey}`
        ).then((response) => response.json());
        this.data = this.getPromise.then(
            function(data) {
                console.log("jcdecaux data", data);
            }.bind(this)
        );
    }
}

console.log(cityNameInp.value);
const cityJcdData = new GetJcdecauxData("0765a9c499d7bbb55e963e4f6977e3ac9d3094c4", "toulouse");

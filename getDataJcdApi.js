class GetJcdecauxData {
    constructor(apiKey, cityNameValue, number, hello, data) {
        this.apiKey = apiKey;
        this.cityNameValue = cityNameValue;
        this.cityNameValue = cityNameInp.value;
        this.number = number;
        this.data = data;
        this.text = document.querySelector(".text");
        this.hello = hello;
        this.getPromise = fetch(
            `https://api.jcdecaux.com/vls/v1/stations?contract=${this.cityNameValue}&apiKey=${this.apiKey}`
        ).then((response) => response.json());
        this.data = this.getPromise.then(
            function(data) {
                console.log(data);
                console.log(data[0].number);
                hello = data[1].name;
                this.text.textContent = hello;
                console.log(hello);
                var proto = data[10].name;
                console.log(proto);
            }.bind(this)
        );
    }
}

console.log(cityNameInp.value);
const cityJcdData = new GetJcdecauxData("0765a9c499d7bbb55e963e4f6977e3ac9d3094c4", "toulouse");
console.log(cityJcdData.getPromise);
console.log(cityJcdData.data);

const jcdPromise = cityJcdData.getPromise;
const jcdData = cityJcdData.data;

class CreateMap {
    constructor(mapId, longitude, latitude, zoom, accessToken, marker, mymap, data, hello2) {
        this.jcdData = cityJcdData.data;
        this.mapId = mapId;
        this.longitude = longitude;
        this.latitude = latitude;
        this.zoom = zoom;
        this.accessToken = accessToken;
        this.marker = marker;
        this.mymap = mymap;
        this.promise = jcdPromise;
        this.data = data;
        this.hello2 = hello2;
        this.text = document.querySelector(".text2");

        this.displayMap = function() {
            this.mymap = L.map(`${this.mapId}`).setView([this.longitude, this.latitude], this.zoom);
            marker = L.marker([this.longitude, this.latitude]).addTo(this.mymap);
            L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
                attribution:
                    'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                maxZoom: 18,
                id: "mapbox.streets",
                accessToken
            }).addTo(this.mymap);
            marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
            console.log("here", this.newdata);
        };

        this.data = this.promise.then(
            function(data) {
                console.log(data);
                console.log(data[10].number);
                hello2 = data[10].name;
                this.text.textContent = hello2;
                var proto = data[10].name;
                console.log(proto);
            }.bind(this)
        );
    }
}

const displayNewMap = new CreateMap(
    "mapid",
    "43.604462",
    "1.444247",
    "13",
    "pk.eyJ1Ijoid2xhZDM0IiwiYSI6ImNqeHA5N25qYTBhZnozbmwzMmdmczBtcGoifQ.hYSWIqrFTCmtKzfE56Y4iw"
);

displayNewMap.displayMap();
displayNewMap.getData;

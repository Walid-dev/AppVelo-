const jcdPromise = cityJcdData.getPromise;
const jcdData = cityJcdData.data;

class CreateMap {
    constructor(mapId, zoom, accessToken, data) {
        this.jcdData = cityJcdData.data;
        this.mapId = mapId;
        this.zoom = zoom;
        this.accessToken = accessToken;
        this.promise = jcdPromise;
        this.data = data;
        this.text = document.querySelector(".text2");

        this.data = this.promise.then(
            function(data) {
                console.log("leafletmap data", data);
                let dataArray = [""];
                dataArray.push(data);

                let longitude = data[0].position.lng;
                let latitude = data[0].position.lat;

                console.log(dataArray[1][1].position);

                const mymap = L.map(`${this.mapId}`).setView([latitude, longitude], this.zoom);
                console.log(longitude, latitude);
                const marker = L.marker([latitude, longitude]).addTo(mymap);
                L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
                    attribution:
                        'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                    maxZoom: 18,
                    id: "mapbox.streets",
                    accessToken
                }).addTo(mymap);
                marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
                let i = 0;
                for (i = 0; i <= data.length; i++) {
                    const stationsPosition = L.marker([data[i].position.lat, data[i].position.lng]).addTo(mymap);
                    i++;
                }
            }.bind(this)
        );
    }
}

const displayNewMap = new CreateMap(
    "mapid",
    "11",
    "pk.eyJ1Ijoid2xhZDM0IiwiYSI6ImNqeHA5N25qYTBhZnozbmwzMmdmczBtcGoifQ.hYSWIqrFTCmtKzfE56Y4iw"
);

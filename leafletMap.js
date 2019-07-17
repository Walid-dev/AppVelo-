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

        // Get and the jcDecaux Api promise and use the data
        this.data = this.promise.then(
            function(data) {
                console.log("leafletmap data", data);
                // Pushes the data in an array
                let dataArray = [data];
                dataArray.push(data);
                // Set the lat and lng to display the city
                let longitude = data[0].position.lng;
                let latitude = data[0].position.lat;

                console.log(dataArray[1][1].position);

                // Map Code using the variables settled above
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

                // The for loop to display stations and informations from the data
                for (const stations of data) {
                    console.log(stations[0]);
                    let stationLatitude = stations.position.lat;
                    let stationLongitude = stations.position.lng;
                    let stationStatus = stations.status;
                    let stationNumber = stations.name;

                    let markers = L.marker([stationLatitude, stationLongitude]).addTo(mymap);
                    markers.bindPopup("<p>" + stationNumber + "</p>");

                    if (stations.available_bikes > 10) {
                    } else {
                    }

                    var popup = L.popup();
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

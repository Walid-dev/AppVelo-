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

                // The for loop to display stations and information from the data
                for (const stations of data) {
                    // Declares variables of the stations information
                    let stationLatitude = stations.position.lat;
                    let stationLongitude = stations.position.lng;
                    let stationStatus = stations.status;
                    let stationAdress = stations.address;
                    let stationName = stations.name;
                    let availableBikeStands = stations.available_bike_stands;
                    let availableBikes = stations.available_bikes;

                    stationStatus = "OPEN" ? "Station Ouverte" : "Station fermée ou en travaux";

                    // Set the markers and their popups
                    let markers = L.marker([stationLatitude, stationLongitude]).addTo(mymap);
                    markers.bindPopup(
                        "<p class=" +
                            "stations_status>" +
                            stationStatus +
                            "</p><p class=" +
                            "stations_name>Station: " +
                            stationAdress +
                            "</p><p class=" +
                            "bike_stands" +
                            ">Places: " +
                            availableBikeStands +
                            "</p><p class=" +
                            "bike_stands" +
                            ">Disponibles:" +
                            availableBikes +
                            "</p>"
                    );

                    $("#information_fields").hide();
                    $(".booking_fields").hide();

                    markers.addEventListener("click", () => {
                        document.getElementById("information_fields").innerHTML =
                            "<li class=" +
                            "adress_field >Adresse : " +
                            stationAdress +
                            "</li><li class=" +
                            "place_field >Place : " +
                            availableBikeStands +
                            "</li><li class=" +
                            "available_field >Disponible(s): " +
                            availableBikes +
                            "</li><div><a class=" +
                            "btn--booking" +
                            ">Valider</a></div>";
                        // Add the adress on timer fields
                        document.querySelector(".address_field_timer").innerHTML =
                            "<span class=" + "adress_timer>Vélo reservé à " + stationAdress + "</span>";

                        // Hide explain fields and Display the information fields

                        $("#information_fields").show();
                        $(".btn--booking").click(function(e) {
                            e.preventDefault();
                            $(".booking_fields").fadeTo(400, 1);
                        });
                    });
                }
            }.bind(this)
        );
    }
}

console.log(name);

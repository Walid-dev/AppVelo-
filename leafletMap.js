class CreateMap {
    constructor(mapId, zoom, accessToken) {
        this.jcdData = cityJcdData.data;
        this.mapId = mapId;
        this.zoom = zoom;
        this.accessToken = accessToken;
        this.promise = jcdPromise;
        this.text = document.querySelector(".text2");

        this.testOut = function() {
            this.promise.then(function(data) {
                for (const stations of data) {
                }
            });
        };

        // Get and the jcDecaux Api promise and use the data
        this.promise.then(
            function(data) {
                console.log("leafletmap data", data);
                // Pushes the data in an array
                let dataArray = [data];
                dataArray.push(data);
                // Set the lat and lng to display the city
                let longitude = data[0].position.lng;
                let latitude = data[0].position.lat;

                // Map Code using the variables settled above
                const mymap = L.map(`${this.mapId}`).setView([latitude, longitude], this.zoom);
                console.log(longitude, latitude);
                L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
                    attribution:
                        'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                    maxZoom: 18,
                    id: "mapbox.streets",
                    accessToken
                }).addTo(mymap);

                // Create markers
                let cluster = L.markerClusterGroup();

                // The for loop to display stations and information from the data
                // Create Cluster
                for (const stations of data) {
                    // Declares variables of the stations information
                    let stationLatitude = stations.position.lat;
                    let stationLongitude = stations.position.lng;
                    let stationStatus = stations.status;
                    let stationAdress = stations.address;
                    let stationName = stations.name;
                    let availableBikeStands = stations.available_bike_stands;
                    let availableBikes = stations.available_bikes;
                    let lastUpdate = stations.last_update;

                    // Display the station status in french
                    stationStatus = "OPEN" ? "Station Ouverte" : "Station fermée ou en travaux";

                    // Set the markers and their popups
                    let markers = L.marker([stationLatitude, stationLongitude]).addTo(cluster);
                    mymap.addLayer(cluster);
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
                            "</p>" +
                            "<p>" +
                            lastUpdate +
                            "</p>"
                    ),
                        // Hide the input booking fields

                        $(".main__input-container-child").hide();
                    $(".booking_fields").hide();

                    // Display stations information marker onclick
                    markers.addEventListener("click", () => {
                        $(".main__input-container-child2").hide();
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

                        // Hide explaining fields and Display the information fields
                        $(".main__input-container-child").show();
                        $(".btn--booking").click(function(e) {
                            $(".booking_fields").fadeTo(400, 1);
                            $("#information_fields").css("display", "none");

                            // Push the data in the Session Storage

                            sessionStorage.setItem("adresse", JSON.stringify(stationAdress));
                            sessionStorage.setItem("station_name", JSON.stringify(stationName));
                        });
                        // Display the signature canvas box
                    });
                }
            }.bind(this)
        );
    }
}

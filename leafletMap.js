class CreateMap {
    constructor(mapId, zoom, accessToken) {
        this.mapId = mapId;
        this.zoom = zoom;
        this.accessToken = accessToken;
        this.promise = jcdPromise;

        // Get  the jcDecaux Api promise and use the data
        this.promise.then(
            function(data) {
                // Pushes the data in an array
                let dataArray = [data];
                dataArray.push(data);
                // Set the lat and lng to display the city
                let longitude = data[0].position.lng;
                let latitude = data[0].position.lat;

                // Map Code using the variables settled above
                const mymap = L.map(`${this.mapId}`).setView([latitude, longitude], this.zoom);

                // Display Map Code
                L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
                    attribution:
                        'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                    maxZoom: 18,
                    id: "mapbox.streets",
                    accessToken
                }).addTo(mymap);

                // Creates Cluster
                let cluster = L.markerClusterGroup();

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
                            "stations_name>Station : " +
                            stationName +
                            "</p><p class=" +
                            "stations_adress>Adresse: " +
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
                    ),
                        // Hide the input booking fields
                        $(".main__input-container-child").hide();
                    $(".booking_fields").hide();

                    // Display stations information marker onclick
                    markers.addEventListener("click", () => {
                        $(".main__input-container-child2").hide();
                        document.getElementById("information_fields").innerHTML =
                            "<li class=" +
                            "station_field >Station : " +
                            stationName +
                            "</li><li class=" +
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

                        // Hide explaining fields and Display the information fields
                        $(".main__input-container-child").show();
                        $(".btn--booking").click(function() {
                            $(".booking_fields").fadeTo(400, 1);
                            $("#information_fields").css("display", "none");

                            // Display the reservation information in a text box which replaces the map box when the reservation is confirmed
                            $("#resaBtn").click(function(e) {
                                e.preventDefault();
                                document.getElementById("mapBox").innerHTML =
                                    "<ul class=" +
                                    "mapBox_infos" +
                                    "><h3>Réservation</h3><hr><li>" +
                                    "Un vélo est réservé par " +
                                    submittedValues.name.value +
                                    " " +
                                    submittedValues.surname.value +
                                    "</li><li>A l'adresse suivante : " +
                                    stationAdress +
                                    "</li></ul>";
                                document.querySelector(".address_field_timer").innerHTML =
                                    "<span class=" +
                                    "adress_timer> Réservation à la station :  " +
                                    stationName +
                                    "</span><br><span>Adresse :  " +
                                    stationAdress +
                                    "</span>";
                            });

                            // Push the data reservation in the Session Storage

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

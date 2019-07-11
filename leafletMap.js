class CreateMap {
    constructor(mapId, longitude, latitude, zoom, accessToken, marker, mymap) {
        this.mapId = mapId;
        this.longitude = longitude;
        this.latitude = latitude;
        this.zoom = zoom;
        this.accessToken = accessToken;
        this.marker = marker;
        this.mymap = mymap;
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
        };
    }
}

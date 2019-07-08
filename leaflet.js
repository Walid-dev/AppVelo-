function CreateMap(mapId, longitude, latitude, zoom, accessToken, marker) {
  this.mapId = mapId;
  this.longitude = longitude;
  this.latitude = latitude;
  this.zoom = zoom;
  this.accessToken = accessToken;
  this.marker = marker;
  this.displayMap = function() {
    mymap = L.map(`${this.mapId}`).setView([this.longitude, this.latitude], this.zoom);
    marker = L.marker([this.longitude, this.latitude]).addTo(mymap);
    L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: "mapbox.streets",
      accessToken
    }).addTo(mymap);
    marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
  };
}

//const newMap = new CreateMap("mapid", 51.505, -0.09, 13, "pk.eyJ1Ijoid2xhZDM0IiwiYSI6ImNqeHA5N25qYTBhZnozbmwzMmdmczBtcGoifQ.hYSWIqrFTCmtKzfE56Y4iw");
//newMap.display();

const toulouseMap = new CreateMap("mapid", 43.6043, 1.4437, 13, "pk.eyJ1Ijoid2xhZDM0IiwiYSI6ImNqeHA5N25qYTBhZnozbmwzMmdmczBtcGoifQ.hYSWIqrFTCmtKzfE56Y4iw");
toulouseMap.displayMap();

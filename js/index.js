function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 25.034436, lng: 121.564066 },
    zoom: 10,
  });
  var marker = new google.maps.Marker({
    position: { lat: 25.034436, lng: 121.564066 },
    map: map,
  });
  var addCircle = new google.maps.Circle({
    center: { lat: 25.034436, lng: 121.564066 },
    radius:100,
    strokeColor: "red",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "red",
    fillOpacity: 0.5,
    map: map,
  });
  var infowindow = new google.maps.InfoWindow({
    content: "<p>Here is my hometown</p>"
  });
  infowindow.open(map, marker);
}
window.initMap = initMap;




var geocoder;
var map;
var address = "";

function initMap() {
    var locs = JSON.parse(localStorage.getItem("locs"));
    address == "" ? address = locs[0].name : "";
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 20,
        center: {lat: locs[0].lat, lng: locs[0].lng}
    });
    geocoder = new google.maps.Geocoder();
    codeAddress(geocoder, map);
}

function codeAddress(geocoder, map) {
    geocoder.geocode({'address': address}, function(results, status) {
    if (status === 'OK') {
        map.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
            map: map,
            position: results[0].geometry.location
        });
        localStorage.setItem("locs",JSON.stringify([{lat: results[0].geometry.location.lat(),lng:results[0].geometry.location.lng(),name:address}]));
    } else {
        alert('Geocode was not successful for the following reason: ' + status);
    }
    });
};

function setLocation(){
    address = document.getElementById('location').value;
    initMap();
    $("#successlocupdates").popup('open');
};
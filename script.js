/** GEOLOCALISATION ET MARKER**/
var map, infoWindow;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
         zoom:10,
        center:{lat:48.866667,lng:2.333333}
        });
          
  var spa= {lat:48.8601804,lng:2.3461359};
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 10, center: spa});
  var marker = new google.maps.Marker({position: spa, map: map});
          
        infoWindow = new google.maps.InfoWindow;
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
            var marker = new google.maps.Marker({position: pos, map: map}); 

            infoWindow.setPosition(pos);
            infoWindow.setContent('Vous etes ici.');
            infoWindow.open(map);
            map.setCenter(pos);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          handleLocationError(false, infoWindow, map.getCenter());
        }
      }

      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: Vous ne pouvez pas vous géolocaliser.' :
                              'Error: Votre navigateur bloque la géolicalisation.');
          
        infoWindow.open(map);
      }
  google.maps.event.addListener(map, 'click', function(event){
        addMarker({coords:event.latLng});
      });


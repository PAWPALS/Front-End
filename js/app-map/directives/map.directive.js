let mapDirective = function(MapService) {
  
  return {
    restrict: 'A',
    replace: true,
    template: '<div id="map"></div>',
    controller: 'MapController as vm',
    link: function (scope, element, attrs) {
      var map, infoWindow;
      var markers = [];
      var initialLocation;

      // Find location
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function (pos) {
          console.log(pos);
          initialLocation = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
          map.setCenter(initialLocation);
        });
      }
        
      // Map config
      var mapOptions = {
        center: initialLocation,
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        scrollwheel: false,
        styles: [{
          featureType: "poi",
          stylers: [
            { visibility: "off" }
          ]
        },
        {
          featureType: "transit",
          stylers: [
            { visibility: "off" }
          ]
        }]
      };

      // Place a marker
      function setMarker(map, pos, title, content) {
        var marker;
        var markerOptions = {
          position: pos,
          map: map,
          title: title,
          draggable:true,
          icon: ''
        };

        marker = new google.maps.Marker(markerOptions);
        markers.push(marker); // Add marker to array
              
        google.maps.event.addListener(marker, 'click', function (marker) {
          // Close window if not undefined
          if (infoWindow !== void 0) {
            infoWindow.close();
          }
          // Create new window
          var infoWindowOptions = {
            content: content
          };
          infoWindow = new google.maps.InfoWindow(infoWindowOptions);
          infoWindow.open(map, marker);
        });
      }

      // Map initialization
      function initMap() {
        if (map === void 0) {
          map = new google.maps.Map(element[0], mapOptions);
        }
      }

      initMap();
    }
  };

};
  
  

mapDirective.$inject = ['MapService'];

export default mapDirective;
let MapController = function($scope, LostService, MapService, uiGmapGoogleMapApi, $state) {
  
  let vm = this;

  vm.pets = [];

  // Show all lost pets in sidebar 
  getPets();

  function getPets () {
    LostService.getPets().then( (res) => {
      console.log(res);
      vm.pets = res.data.pets;
    });
  }

  // Get coordinates of pets for markers
  lostPets();

  function lostPets () {
    MapService.lostPets().then( (res) => {
      console.log(res);
      vm.pets = res.data.lost_pets_coordinates;
    });
  }

  // Define map
  $scope.map = {
    center: {
      latitude: 33.7490000, 
      longitude: -84.3879800 
    }, 
    zoom: 14,
    markers: [],
    events: {

    } 
  };
  $scope.options = {
    scrollwheel: true
  };

  // Create Marker
  // var createMarker = function(i, bounds, idKey) {
  //   var lat_min = bounds.southwest.latitude,
  //     lat_range = bounds.northeast.latitude - lat_min,
  //     lng_min = bounds.southwest.longitude,
  //     lng_range = bounds.northeast.longitude - lng_min;

  //   if (idKey === null) {
  //     idKey = "id";
  //   }

  //   var latitude = lat_min + (Math.random() * lat_range);
  //   var longitude = lng_min + (Math.random() * lng_range);    
  //   var ret = {
  //     latitude: latitude,
  //     longitude: longitude,
  //     title: 'm' + i
  //   };
  //   ret[idKey] = i;
  //   return ret;
  // };
  // // Array of markers
  // $scope.markers = [];
  // // Get the bounds from the map once it's loaded
  // $scope.$watch(function() {
  //   return $scope.map.bounds;
  // }, function(nv, ov) {
  //   // Only need to regenerate once
  //   if (!ov.southwest && nv.southwest) {
  //     var markers = [];
  //     for (var i = 0; i < 50; i++) {
  //       markers.push(createMarker(i, $scope.map.bounds));
  //     }
  //     $scope.markers = markers;
  //   }
  // }, true);


};

MapController.$inject = ['$scope', 'LostService',  'MapService', 'uiGmapGoogleMapApi', '$state'];

export default MapController;
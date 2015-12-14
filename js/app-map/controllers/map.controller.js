let MapController = function($scope, LostService, MapService, uiGmapGoogleMapApi, $state) {
  
  let vm = this;

  vm.pets = [];
  vm.lostPets = [];

  // Show all lost pets in sidebar 
  getPets();

  function getPets () {
    LostService.getPets().then( (res) => {
      console.log(res);
      vm.pets = res.data.pets;
    });
  }

  // Show pets with present = no
  $scope.isLost = function() {
    if (vm.pets.present === "no")
      return false;
  };

  // Get coordinates of pets for markers
  lostPets();

  function lostPets () {
    MapService.lostPets().then( (res) => {
      console.log(res);

      var lost = [];
      res.data.lost_pets_coordinates.forEach( function (pet, i) {
        lost.push({
          id: i,
          coords: {
            latitude: pet.latitude,
            longitude: pet.longitude
          }
        });
      });

      vm.lostPets = lost;

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


};

MapController.$inject = ['$scope', 'LostService',  'MapService', 'uiGmapGoogleMapApi', '$state'];

export default MapController;
let MapController = function($scope, LostService, MapService, uiGmapGoogleMapApi, $state) {
  
  let vm = this;

  vm.pets = [];
  
  vm.lostPets = [];


  // vm.allLostPets = [];

  // Show all lost pets in sidebar 
  getPets();

  function getPets(pet, data) {
    LostService.getPets(pet, data).then( (res) => {

      // Map array to create a new array with only present = no
      vm.petsNotPresent = res.data.pets.filter( function(pet, data) {
        return pet.present === "no";  
      });

      console.log("This is the filtered vm.pets array ", vm.petsNotPresent);
      // vm.pets = allLostPets;

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

  // Get coordinates of pets for markers
  lostPets();

  function lostPets () {
    MapService.lostPets().then( (res) => {
      console.log("This is lost pet coordinates ", res);

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

};

MapController.$inject = ['$scope', 'LostService',  'MapService', 'uiGmapGoogleMapApi', '$state'];

export default MapController;
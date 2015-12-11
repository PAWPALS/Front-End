let MapController = function($scope, MapService, uiGmapGoogleMapApi, $state) {
  
  let vm = this;

  // Map
  $scope.map = {center: {latitude: 33.7490000, longitude: -84.3879800 }, zoom: 14 };

  $scope.options = {scrollwheel: false};

  // Markers

  
  // Show all pets
  vm.pets = [];

  getPets();

  function getPets () {
    MapService.getPets().then( (res) => {
      console.log(res);
      vm.pets = res.data.pets;
    });
  }

};

MapController.$inject = ['$scope', 'MapService', 'uiGmapGoogleMapApi', '$state'];

export default MapController;
let MapController = function($scope, MapService, uiGmapGoogleMapApi, $state) {
  
  let vm = this;

  // Map
  $scope.map = {center: {latitude: 51.219053, longitude: 4.404418 }, zoom: 14 };
  $scope.options = {scrollwheel: false};

  
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
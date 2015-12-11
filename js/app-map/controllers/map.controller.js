let MapController = function($scope, MapService, uiGmapGoogleMapApi, $state) {
  
  let vm = this;

  // Map
  vm.map = { center: { latitude: 33.7550, longitude: 84.3900 }, zoom: 8 };


  
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
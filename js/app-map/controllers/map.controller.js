let MapController = function($scope, MapService, $state) {
  
  // Show all pets
  let vm = this;

  vm.pets = [];

  getPets();

  function getPets () {
    MapService.getPets().then( (res) => {

      console.log(res);
      vm.pets = res.data.pets;
      
    });
  }

  // Map

  vm.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };



};

MapController.$inject = ['$scope', 'MapService', '$state'];

export default MapController;
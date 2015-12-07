let MapController = function(MapService) {
  
  let vm = this;

  vm.pets = [];

  getPets();

  function getPets () {
    MapService.getPets().then( (res) => {
      vm.Pets = res.data.pets;
    });
  }

};

MapController.$inject = ['MapService'];

export default MapController;
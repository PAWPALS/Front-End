let PetRegController = function($scope, PetRegService, $cookies, $state) {
  
  let vm = this;

  vm.addPet = addPet;


  function addPet (petObj) {
    PetRegService.addPet(petObj).then( (res) => {
      console.log(res);
    });
  }

};

PetRegController.$inject = ['$scope', 'PetRegService', '$cookies', '$state'];

export default PetRegController;

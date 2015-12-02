let PetRegController = function($scope, HomeService, $cookies, $state) {
  
  let vm = this;

  vm.addPet = addPet;

  function addPet (petObj) {
    HomeService.addPet(petObj).then( (res) => {
      console.log(res);
    });
  }

};

PetRegController.$inject = ['$scope', 'HomeService', '$cookies', '$state'];

export default PetRegController;

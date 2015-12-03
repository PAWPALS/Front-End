let PetRegController = function($scope, PetRegService, $cookies, $state) {
  
  let vm = this;

  vm.addPet = addPet;



  function addPet (petObj) {
    PetRegService.addPet(petObj).then( (res) => {
      console.log(res);
    });
  }

  $scope.addPet = function(pet) {
    console.log(pet);

    HomeService.addPet(pet);
  };  

};

PetRegController.$inject = ['$scope', 'PetRegService', '$cookies', '$state'];

export default PetRegController;

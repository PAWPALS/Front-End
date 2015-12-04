let PetRegController = function($scope, PetRegService, $cookies, $state) {
  
  let vm = this;

  vm.addPet = addPet;
  vm.showForm = showForm;
  vm.uploadImage = uploadImage;

  activate();

  function activate (){
    PetRegService.getPet($stateParams.id).then( (res) => {
      vm.pet = res.data;
    });
  }   

  function addPet (petObj) {
    PetRegService.addPet(petObj).then( (res) => {
      console.log(res);
    });
  }

  $scope.addPet = function(pet) {
    console.log(pet);

    PetRegService.addPet(pet);
  };  

};

PetRegController.$inject = ['$scope', 'PetRegService', '$cookies', '$state'];

export default PetRegController;

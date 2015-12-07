let PetRegController = function($scope, PetRegService, $cookies, $stateParams) {
  
  let vm = this;

  vm.addPet = addPet;
  vm.showForm = showForm;
  vm.showImageUpload = showImageUpload;

  activate();

  function showForm () {
    
  }

  function showImageUpload () {

  }


  function activate (){
    PetRegService.getPet($stateParams.id).then( (res) => {
      vm.pet = res.data;
    });
  }   

  // Register new pet
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

PetRegController.$inject = ['$scope', 'PetRegService', '$cookies', '$stateParams'];

export default PetRegController;

let PetRegController = function($scope, PetRegService, $cookies, $stateParams) {
  
  let vm = this;

  vm.addPet = addPet;
  vm.showForm = showForm;
  vm.showImageUpload = showImageUpload;
  vm.addImage = addImage;

  activate();

  function activate () {
    PetRegService.getPet($stateParams.id).then( (res) => {
      vm.pet = res.data;
    });
  }   

  function showForm () {
    vm.showImageUpload = (vm.showImageUpload) ? false : true;
    
  }

  function showImageUpload () {

  }

  function getPet () {
    
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

  function addImage (data) {
    console.log(data);

  }

};

PetRegController.$inject = ['$scope', 'PetRegService', '$cookies', '$stateParams'];

export default PetRegController;

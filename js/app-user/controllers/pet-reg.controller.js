let PetRegController = function($scope, PetRegService, $cookies, $stateParams) {
  
  let vm = this;

  vm.addPet           = addPet;
  vm.showImageUpload  = false;
  vm.showForm         = showForm;
  vm.uploadImage      = uploadImage;

  // Register new pet
  function addPet (petObj) {
    PetRegService.addPet(petObj).then( (res) => {
      console.log(res);
    });
  }

  // $scope.addPet = function(pet) {
  //   console.log(pet);
  //   PetRegService.addPet(pet);
  // };  


  function showForm () {
    vm.showImageUpload = (vm.showImageUpload) ? false : true;    
  }

  // Upload image
  function uploadImage (data) {
    console.log(data);
  }
  
};

PetRegController.$inject = ['$scope', 'PetRegService', '$cookies', '$stateParams'];

export default PetRegController;

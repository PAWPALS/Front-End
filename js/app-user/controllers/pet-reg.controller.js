let PetRegController = function($scope, PetRegService, $cookies, $stateParams) {
  
  let vm = this;

  vm.addPet = addPet;

  // Register new pet
  function addPet (petObj) {

    let fileUpload = document.getElementById('petImage');
    let petImage = fileUpload.files[0];

    PetRegService.addPet(petObj, petImage).then( (res) => {
      console.log(res);
    });
  }
  
};

PetRegController.$inject = ['$scope', 'PetRegService', '$cookies', '$stateParams'];

export default PetRegController;

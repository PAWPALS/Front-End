let PetRegController = function($scope, PetRegService, $cookies, $stateParams, $state) {
  
  let vm = this;
  
  vm.addPet = addPet;


  // Register new pet
  function addPet (petObj) {

    let fileUpload = document.getElementById('petImage');
    let petImage = fileUpload.files[0];

    PetRegService.addPet(petObj, petImage).then( (res) => {
      console.log(res);
      $state.go('root.profile');
    });
  }
  
};

PetRegController.$inject = ['$scope', 'PetRegService', '$cookies', '$stateParams', '$state'];

export default PetRegController;

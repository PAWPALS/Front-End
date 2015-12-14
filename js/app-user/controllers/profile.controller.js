let ProfileController = function($scope, ProfileService, $state) {
  
  let vm = this;

  // Show all pets
  vm.pets =[];
  console.log(vm.pets);

  getPets();

  function getPets () {
    ProfileService.getPets().then( (res) => {
      console.log(res);
      vm.pets = res.data.pets;    
    });

  }

  // Add a pet
  // Go to pet registration
  $scope.addPet = function() {
    $state.go('root.pet-reg'); 
  };

  
};

ProfileController.$inject = ['$scope','ProfileService', '$state'];

export default ProfileController;
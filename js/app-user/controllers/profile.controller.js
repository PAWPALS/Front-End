let ProfileController = function($scope, ProfileService, $state) {
  
  let vm = this;

  // Get user pets
  ProfileService.getPets().then( (res) => {
    vm.pets = res.data.results;
    console.log('pets', vm.pets);
    // return vm.pets;  
  });

  // Go to pet-reg
  // $scope.addPet() {
  //   ProfileService.addPet();
  // };  

  // Lost pet alert
  // $scope.lostPet() {
  //   ProfileService.lostPet();
  // };

};

ProfileController.$inject = ['$scope','ProfileService', '$state'];

export default ProfileController;
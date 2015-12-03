let ProfileController = function($scope, ProfileService, $state) {
  
  let vm = this;

  ProfileService.getProfile().then( (res) => {
    vm.pets= res.data.results;
    console.log(vm.pets);
    return vm.pets;
  });

  $scope.addPet = function() {
    ProfileService.add();
  };  

};

ProfileController.$inject = ['$scope','ProfileService', '$state'];

export default ProfileController;
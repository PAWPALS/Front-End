let ProfileController = function($scope, ProfileService, $state) {
  
  let vm = this;

  // Show all pets
  vm.pets =[];
  console.log(vm.pets);

  getPets();

  function getPets () {
    ProfileService.getPets().then( (res) => {
      console.log(res);
      vm.pets = res.data;    
    });
  }
};

ProfileController.$inject = ['$scope','ProfileService', '$state'];

export default ProfileController;
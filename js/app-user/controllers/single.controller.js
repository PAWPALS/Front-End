let SingleController = function($scope, SingleService, $state, $stateParams) {
  
  let vm = this;

  let petId = $stateParams.id;

  // Get a single pet by id
  SingleService.getPet(petId).then( (res) => {
    console.log(res);
    vm.pet = res.data.pets.pet_id;    
  });

  // Edit pet
  // Send to edit view
  $scope.editPet = function (petId) {
    $state.go('root.edit');
  };

  // Delete pet
  $scope.deletePet = function (petId) {
    SingleService.deletePet(petId).then( (res) => {
      console.log(res);
      $state.go('root.profile');
    });
  };

  // Lost pet alert
  $scope.lostPet = function (petId) {
    SingleService.lostPet(petId).then( (res) => {
      console.log(res);
      $state.go('root.single');
    });
  };  

};

SingleController.$inject = ['$scope', 'SingleService', '$state', '$stateParams'];

export default SingleController;
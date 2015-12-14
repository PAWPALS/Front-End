let EditController = function($scope, SingleService, $state, $stateParams) {

  let vm = this;

  let petId = $stateParams.id;

  // Get a single pet by id
  SingleService.getPet(petId).then( (res) => {
    console.log(res);
    vm.pet = res.data.pets.pet_id;    
  });
  
  $scope.editPet = function (petId) {
    SingleService.editPet(petId).then( (res) => {
      console.log(res);
      $state.go('root.profile');
    });

  };

};

EditController.$inject = ['$scope', 'SingleService', '$state', '$stateParams'];

export default EditController;
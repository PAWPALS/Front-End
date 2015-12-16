let EditController = function($scope, SingleService, $state, $stateParams) {

  let vm = this;

  let petId = $stateParams.id;

  // Get a single pet by id
  SingleService.getPet(petId).then( (res) => {
    console.log(res);

    $scope.pet = res.data.pet;    

  });
  
  $scope.editPet = function (petId) {
    console.log('petId', petId);
    SingleService.editPet(petId).then( (res) => {
      console.log(res);
      $state.go('root.profile');
    });

  };

};

EditController.$inject = ['$scope', 'SingleService', '$state', '$stateParams'];

export default EditController;
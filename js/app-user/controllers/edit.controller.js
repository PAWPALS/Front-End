let EditController = function($scope, SingleService, $state, $stateParams) {
  
  $scope.editPet = function (petId) {
    SingleService.editPet(petId).then( (res) => {
      console.log(res);
      $state.go('root.profile');
    });

  };

};

EditController.$inject = ['$scope', 'SingleService', '$state', '$stateParams'];

export default EditController;
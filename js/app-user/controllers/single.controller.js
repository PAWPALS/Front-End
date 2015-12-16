let SingleController = function($scope, SingleService, $state, $stateParams) {
  
  let petId = $stateParams.id;
  
  // Get a single pet by id
  SingleService.getPet(petId).then( (res) => {
    console.log(res);
    $scope.pet = res.data.pet;  
  });

  // Delete pet
  $scope.deletePet = function(petId) {
    console.log('did i get it ',petId );
    SingleService.deletePet(petId).then( (res) => {
      console.log(res);
      $state.go('root.profile');
    });
  };

  // Lost pet alert
  // $scope.lostPet = function (petId) {
  //   $state.go('root.lost');
  // };  

};

SingleController.$inject = ['$scope', 'SingleService', '$state', '$stateParams'];

export default SingleController;
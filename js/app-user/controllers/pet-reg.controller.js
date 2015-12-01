let PetRegController = function($scope, $state, HomeService) {
  $scope.addPets = (pets) => {
    HomeService.addPets(pets).then((res) => {
      $scope.user = {};
      console.log(res);
    });
    $state.go('root.home');
};
  

PetRegController.$inject = ['$scope', '$state', 'HomeService'];

export default PetRegController;





let SingleController = function($scope, SingleService, $state, $stateParams) {
  
  let vm = this;

  let petId = $stateParams.id;

  SingleService.getPet(petId).then( (res) => {
    console.log(res);
    vm.pet = res.data.pets.pet_id;    
  });

  // Edit pet
  // $scope.editPet = function (id) {
  //   SingleService.editPet(id).then( (res) => {

  //   });

  // }

  // Delete pet
  // $scope.deletePet = function (id) {
  //   SingleService.delete(id).then( (res => {
  //     console.log(res);
  //     $state.go('root.profile');
  //     ));
  // }

};

SingleController.$inject = ['$scope', 'SingleService', '$state', '$stateParams'];

export default SingleController;
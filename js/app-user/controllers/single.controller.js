let SingleController = function($scope, SingleService, $state) {
  
  let vm = this;

  function getPet (id) {
    SingleService.getPet(id).then( (res) => {
      vm.pet = res.data.pets;    
    });

  }

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

SingleController.$inject = ['$scope', 'SingleService', '$state'];

export default SingleController;
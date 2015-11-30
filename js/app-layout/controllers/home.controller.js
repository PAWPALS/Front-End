let HomeController = function($scope, HomeService, $cookies, $state) {

  $scope.login = function (user) {

    HomeService.join (user);
  };
  

  $scope.login = function (user) {
    HomeService.sendLogin(user);
  };

  $scope.logout = function () {
    HomeService.logout();
  };

};

HomeController.$inject = ['$scope', 'HomeService', '$cookies', '$state'];

export default HomeController;
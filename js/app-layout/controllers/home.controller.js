let HomeController = function($scope, HomeService, $cookies, $state) {
  
  // Authentication

  let promise = HomeService.checkAuth();

  if (promise) {
    promise.then( (res) => {
      console.log(res);
      if (res.data.status === 'Authentication failed.') {
        $state.go('root.home');
      } else {
        $scope.message = 'I am logged in';
      }
    });
  }

  // Join
  $scope.login = function(user) {
    HomeService.login(user);
  };

  // Login
  $scope.login = function (user) {
    HomeService.sendLogin(user).then( (res) => {
      HomeService.loginSuccess(res);
    });
  };

  // Logout
  $scope.logmeout = function() {
    HomeService.logout();
  };  

};

HomeController.$inject = ['$scope', 'HomeService', '$cookies', '$state'];

export default HomeController;
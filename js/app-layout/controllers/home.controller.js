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

  // Signup
  $scope.createUser = function(user) {
    console.log(user);
    HomeService.createUser(user);
  };

  // Login
  $scope.login = function (user) {
    console.log(user);
    HomeService.sendLogin(user).then( (res) => {
      console.log(res);
      HomeService.loginSuccess(res);
      console.log(res);
    });
  };

  // Logout
  $scope.logmeout = function() {
    HomeService.logout();
  };  

};

HomeController.$inject = ['$scope', 'HomeService', '$cookies', '$state'];

export default HomeController;
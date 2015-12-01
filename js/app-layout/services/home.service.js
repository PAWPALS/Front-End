let HomeService = function($http, SERVER, $cookies, $state) {

  console.log(SERVER);

  // Authentication
  
  this.checkAuth = function () {

    let token = $cookies.get('authToken');

    SERVER.CONFIG.headers['X-AUTH-TOKEN'] = token;
    
    if (token) {
      return $http.get(SERVER.URL + 'check', SERVER.CONFIG);
    } else {
      $state.go('root.home');
    }

  };

  // Join
  this.join = function (userObj) {
    // let u = new user (userObj);
    return $http.post(SERVER.URL + 'signup', userObj).then((res) => {
      console.log(res);
      $cookies.put('authToken', res.data.user.auth_token);
      $cookies.put('user_id', res.data.user.id);
      SERVER.CONFIG.headers['X-AUTH-TOKEN'] =  res.data.user.auth_token;
      $state.go('root.profile');
    }) ;
  };



  // Login

  this.sendLogin = function (userObj) {
    return $http.post(SERVER.URL + 'login', userObj, SERVER.CONFIG);
  };

  this.loginSuccess = function (res) {
    $cookies.put('authToken', res.data.auth_token);
    SERVER.CONFIG.headers['X-AUTH-TOKEN'] = res.data.auth_token;
    $state.go('root.home');
  };

  // Logout
  this.logout = function () {
    $cookies.remove('authToken');
    SERVER.CONFIG.headers['X-AUTH-TOKEN'] = null;
    $state.go('root.login');
  };

};

HomeService.$inject = ['$http', 'SERVER', '$cookies', '$state'];

export default HomeService;


  

  
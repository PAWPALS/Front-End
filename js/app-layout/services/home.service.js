let HomeService = function($http, SERVER, $cookies, $state) {

  console.log(SERVER);

  // Auth
  this.checkAuth = function () {

    let token = $cookies.get('authToken');

    SERVER.CONFIG.headers['Access-Token'] = token;
    
    console.log('this function is running', token);
    if (token) {

    } else {
      $state.go('root.home');
    }

  };
  
  // Signup
  let User = function(userObj) {
    this.email = userObj.email;
    this.password = userObj.password;
  };
  
  // New instance of user
  this.createUser = function(userObj) {
    console.log(userObj);

    let u = new User(userObj);

    return $http.post(SERVER.URL + '/signup', u).then((res) => {

      console.log(res);
      $cookies.put('authToken', res.data.user.auth_token);
      $cookies.put('user_id', res.data.user.id);

      SERVER.CONFIG.headers['Access-Token'] =  res.data.user.auth_token;
      $state.go('root.pet-reg');
    });
  };

  // Login

  this.sendLogin = function (userObj) {
    return $http.post(SERVER.URL + 'login', userObj, SERVER.CONFIG);
  };

  this.loginSuccess = function (res) {
    $cookies.put('authToken', res.data.user.access_token);
    $cookies.put('user_id', res.data.user.id);

    SERVER.CONFIG.headers['Access-Token'] =  res.data.user.auth_token;    
    $state.go('root.profile');
  };

  // Logout
  this.logout = function () {
    $cookies.remove('authToken');
    SERVER.CONFIG.headers['Access-Token'] = null;
    $state.go('root.home');
  };

  
};

HomeService.$inject = ['$http', 'SERVER', '$cookies', '$state'];

export default HomeService;


  

  
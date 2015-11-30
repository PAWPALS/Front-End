let HomeService = function($http, SERVER, $cookies, $state) {
  
  this.checkAuth = function() {

    let token = $cookies.get('authToken');
    let id = $cookies.get('user_id');

    
    if (token) {
      $state.go('root.login');
    }

  };

  let user = function (obj) {
    this.email = obj.email;
    this.password = obj.password;
  };

  this.join = function (obj) {
    let u = new user (obj);

    return $http.post(SERVER.URL + 'signup', u).then((res) => {
      console.log(res);
      $cookies.put('authToken', res.data.user.auth_token);
      $cookies.put('user_id', res.data.user.id);
      SERVER.CONFIG.headers['X-AUTH-TOKEN'] =  res.data.user.auth_token;
      $state.go('root.profile');
    }) ;
  };

  // $state.go('root.dashboard') === 'root.profile'

  this.sendLogin = function (userObj) {
    $http.post(SERVER.URL + 'login', userObj, SERVER.CONFIG).then((res) => {
      console.log(res);
      $cookies.put('authToken', res.data.user.auth_token);
      $cookies.put('user_id', res.data.user.id);
      SERVER.CONFIG.headers['X-AUTH-TOKEN'] =  res.data.user.auth_token;
      $state.go('root.profile');
    }); 
  };


  this.logout = function () {
    $cookies.remove('authToken');
    SERVER.CONFIG.headers['X-AUTH-TOKEN'] = null;
    $state.go('root.home');
  };

};


HomeService.$inject = ['$http', 'SERVER', '$cookies', '$state'];

export default HomeService;
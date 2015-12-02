let HomeService = function($http, SERVER, $cookies, $state) {

  console.log(SERVER);

  // Auth
  this.checkAuth = function () {

    let token = $cookies.get('authToken');

    SERVER.CONFIG.headers['Access-Token'] = token;
    

    if (token) {
      return $http.get(SERVER.URL + 'check', SERVER.CONFIG);
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
    SERVER.CONFIG.headers['Access-Token'] = res.data.auth_token;
    $state.go('root.profile');
  };

  // Logout
  this.logout = function () {
    $cookies.remove('authToken');
    SERVER.CONFIG.headers['Access-Token'] = null;
    $state.go('root.home');
  };

  // Pet Registration
  let Pet = function(petObj) {
    this.name = petObj.name;
    this.age = petObj.age;
    this.breed = petObj.breed;
    this.description = petObj.description;
  };

  this.addPet = function(petObj) {
    console.log(petObj);

    let p = new Pet(petObj);

    console.log(SERVER);

    return $http.post(SERVER.URL + '/pets', p, SERVER.CONFIG).then((res) => {
      console.log(res);
      $cookies.get('authToken', res.data.pet.auth_token);
      $cookies.put('pet_id', res.data.pet.id);
      SERVER.CONFIG.headers['Access-Token'] = res.data.pet.auth_token;
      $state.go('root.pet-reg');
    });

   
  };

};

HomeService.$inject = ['$http', 'SERVER', '$cookies', '$state'];

export default HomeService;


  

  
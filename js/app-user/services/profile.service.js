
let ProfileService = function($state, $http, SERVER, $cookies) {

  
  console.log(SERVER);

  // Display index of users pets
  // Get user by id 
  let url = SERVER.URL + 'users';

  this.getPets = getPets;

  // Set userId to get user pets
  function getPets() {

    let userId = $cookies.get('user_id');
    return $http.get(url + '/' + userId + '/pets', SERVER.CONFIG);

  }

  this.lostPet = function (){
    $state.go('root.map');
  };

  
  // Lost pet
  // Change status to false
  // this.lostPet = function () {
  //   $state.go('root.home');
  // };
  
};


ProfileService.$inject = ['$state', '$http', 'SERVER', '$cookies'];



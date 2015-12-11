let SingleService = function($state, $http, SERVER, $cookies) {
 
  // Display user's single pet
  // Get user by id 
  let url = SERVER.URL + 'users';

  this.getPet = getPet;

  function getPet() {
    let userId = $cookies.get('user_id');
    return $http.get(url + '/' + userId + '/pets' + 'pet_id', SERVER.CONFIG);
  } 

  // Edit pet
  function editPet() {

  }
  

};

SingleService.$inject = ['$state', '$http', 'SERVER', '$cookies'];

export default SingleService;
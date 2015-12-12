let SingleService = function($state, $stateParams, $http, SERVER, $cookies) {
 
  // Display user's single pet
  // Get user by id 
  let url = SERVER.URL + 'pets';

  let petId = $stateParams.id;


  this.getPet = getPet;

  function getPet(petId) {
    // let userId = $cookies.get('user_id');
    return $http.get(url + '/' + petId, SERVER.CONFIG);
  } 

  // Edit pet
  function editPet() {

  }
  

};

SingleService.$inject = ['$state', '$stateParams', '$http', 'SERVER', '$cookies'];

export default SingleService;
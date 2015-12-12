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
  this.editPet = function(petId) {
    return $http.get(url + '/' + petId, SERVER.CONFIG);
  };

  // Delete pet
  this.deletePet = function(petId) {
    return $http.get(url + '/' + petId, SERVER.CONFIG);
  };

  // Lost pet alert
  // Change pet present from true to false
  this.lostPet = function(petId) {
    return $http.get(url + '/' + petId, SERVER.CONFIG);

  };
  

};

SingleService.$inject = ['$state', '$stateParams', '$http', 'SERVER', '$cookies'];

export default SingleService;
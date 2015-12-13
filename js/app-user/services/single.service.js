let SingleService = function($state, $stateParams, $http, SERVER, $cookies) {
 
  // Display single pet
  let url = SERVER.URL + 'pets';

  // Get pet single pet id from state params
  let petId = $stateParams.id;

  this.getPet = getPet;

  function getPet(petId) {
    return $http.get(url + '/' + petId, SERVER.CONFIG);
  }

  // Edit pet
  this.editPet = function(petId) {
    return $http.get(url + '/' + petId, SERVER.CONFIG);
  };

  // Delete pet
  this.deletePet = function(petId) {
    return $http.delete(url + '/' + petId, SERVER.CONFIG);
  };

  // Lost pet alert
  // Change pet present from true to false
  this.lostPet = function(petId) {
    return $http.get(url + '/' + petId, SERVER.CONFIG);

  };
  

};

SingleService.$inject = ['$state', '$stateParams', '$http', 'SERVER', '$cookies'];

export default SingleService;
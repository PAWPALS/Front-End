let ProfileService = function($state, $http, SERVER) {
  
  console.log(SERVER);

  // Display index of users pets
  // Get user by id 
  let url = SERVER.URL + 'users';

  this.getPets = getPets;

  function getPets() {
    return $http.get(url + '/:id' + '/pets', SERVER.CONFIG);
    //pet.picture = imageUrl;
    //return $http.put(url + '/' + pet.objectId, pet, SERVER.CONFIG);
  }

  
  // Go to pet-reg
  this.addPet = function () {
    $state.go('root.pet-reg');
  };

  // Lost pet
  // Change status to false
  this.lostPet = function () {
    $state.go('root.home');
  };
  

};

ProfileService.$inject = ['$state', '$http', 'SERVER'];

export default ProfileService;
let ProfileService = function($state, $http, $cookies, SERVER) {
  
  console.log(SERVER);

  // Display index of users pets
  // Get user by id 
  let url = SERVER.URL + 'users';

  this.getPets = getPets;

  function getPets() {
    let userId = $cookies.get('user.id');
    return $http.get(url + user_id + '/pets', SERVER.CONFIG);
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

ProfileService.$inject = ['$state', '$http', '$cookies', 'SERVER'];

export default ProfileService;








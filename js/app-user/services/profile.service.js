let ProfileService = function($scope, $http, SERVER, $cookies) {
  
  console.log(SERVER);

  let url = SERVER.URL;

  // Display index of users pets
  // Get user by id 
  this.getPets = function() {
    let token = $cookies.get('authToken');
    return $http({
      url: url + 'users/' + pets,
      method: 'GET',
      headers: {
        auth_token: token
      },
      data: {
      }

    });

  };

  // this.getPets = function (id) {
  //   return $http.get(url + 'users/' + id + 'pet', SERVER.CONFIG);
  // };

  // Go to pet-reg
  this.addPet = function () {
    $state.go('root.add-pet');
  };

  // Lost pet
  // Change status to false
  this.lostPet = function () {

  };
  

};

ProfileService.$inject = ['$scope', '$http', 'SERVER', '$cookies'];

export default ProfileService;
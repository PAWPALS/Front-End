let ProfileService = function($http, SERVER, $cookies) {
  
  let url = SERVER.URL;

  // Display index of users pets
  // Get user by id 

  this.getProfile = function(id) {
    let token = $cookies.get('authToken');
    return $http({
      url: url + 'users/' + id/pets,
      method: 'GET',
      headers: {
        auth_token: token
      },
      data: {
      }

    });

  };

  this.add = function () {
    $state.go('root.add-pet');
  };
  

};

ProfileService.$inject = ['$http', 'SERVER', '$cookies'];

export default ProfileService;
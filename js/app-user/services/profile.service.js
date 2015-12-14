let ProfileService = function($state, $http, SERVER, $cookies) {
  
  console.log(SERVER);

  // Display index of users pets
  
  let url = SERVER.URL + 'users';

  this.getPets = getPets;

  // Set userId to get user pets
  function getPets() {
    let userId = $cookies.get('user_id');
    return $http.get(url + '/' + userId + '/pets', SERVER.CONFIG);
  }
  
};

ProfileService.$inject = ['$state', '$http', 'SERVER', '$cookies'];

export default ProfileService;
let MapService = function($http, SERVER, $cookies, $state) {
  
  // Get all lost pets & coordinates
  let url = SERVER.URL + 'pet_notices' + '/pets' + '/all_lost';

  this.lostPets = lostPets;

  function lostPets(obj) {
    // console.log(obj);
    return $http.get(url, SERVER.CONFIG);
  }

};

MapService.$inject = ['$http', 'SERVER', '$cookies', '$state'];

export default MapService;
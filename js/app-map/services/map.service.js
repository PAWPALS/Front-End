let MapService = function($http, SERVER, $cookies, $state) {
  
  // Get index of pets
  let url = SERVER.URL + 'pets';

  this.getPets = getPets;

  function getPets(obj) {
    return $http.get(url, SERVER.CONFIG);
  }

  // Drop markers of lost pets
  // function setMarker() {

  // }

};

MapService.$inject = ['$http', 'SERVER', '$cookies', '$state'];

export default MapService;
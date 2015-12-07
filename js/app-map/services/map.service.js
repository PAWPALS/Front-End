let MapService = function($http, SERVER, $cookies, $state) {
  
  let url = SERVER.URL + 'pets';

  this.getPets = getPets;

  function getPets(obj) {
    return $http.get(url, SERVER.CONFIG);
  }

};

MapService.$inject = ['$http', 'SERVER', '$cookies', '$state'];

export default MapService;
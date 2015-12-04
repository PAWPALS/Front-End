let MapService = function($http, SERVER) {
  
  let url = SERVER.URL + 'pets';

  this.getPets = getPets;

  function getPets(obj) {
    return $http.get(url, SERVER.CONFIG);

  }

};

MapService.$inject = ['$http', 'SERVER'];

export default MapService;
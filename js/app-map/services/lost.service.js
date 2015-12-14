let LostService = function($http, SERVER, $cookies, $state) {
  // Lost pet sidebar
  // Get index of pets
  let url = SERVER.URL + 'pets';

  this.getPets = getPets;

  function getPets(obj) {
    // console.log(obj);
    return $http.get(url, SERVER.CONFIG);
  }

};

LostService.$inject = ['$http', 'SERVER', '$cookies', '$state'];

export default LostService;
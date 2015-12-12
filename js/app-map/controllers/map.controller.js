let MapController = function($scope, MapService, uiGmapGoogleMapApi, $state) {
  
  let vm = this;

  // Show all pets
  vm.pets = [];

  getPets();

  function getPets () {
    MapService.getPets().then( (res) => {
      console.log(res);
      vm.pets = res.data.pets;
    });
  }

  // Map
  $scope.map = {
    center: {
      latitude: 33.7490000, 
      longitude: -84.3879800 
    }, 
    zoom: 14,
    markers: [],
    events: {

    } 
  };



  $scope.options = {
    scrollwheel: false
  };

  // Markers

  $scope.marker = {
    id: 0,
    coords: {
      latitude: 33.7490000, 
      longitude: -84.3879800 
    }
  };

  // Array of markers
  $scope.markers = [];

  // Get request
  // $http.get()
  //   .success(function(res) {
  //     $scope.markers = res;
  //   });





  

};

MapController.$inject = ['$scope', 'MapService', 'uiGmapGoogleMapApi', '$state'];

export default MapController;
let UploadService = function($http, SERVER) {
  
  this.upload = upload;
  
  // function addImage (imageUrl, pet) {
  //     pet.picture = imageUrl;
  //     return $http.put(url + '/' + pet.objectId, pet, SERVER.CONFIG);
  //   }

  function upload (file) {

    let formData = new FormData();
    formData.append('upload', file);
    

    return $http.post(SERVER.URL, formData, SERVER.CONFIG);
  }

};

UploadService.$inject = ['$http', 'SERVER'];

export default UploadService;
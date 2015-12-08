let PetRegService = function($http, SERVER, $cookies, $state) {

  // Pet Registration
  let Pet = function(petObj) {
    this.name = petObj.name;
    this.age = petObj.age;
    this.breed = petObj.breed;
    this.description = petObj.description;
    this.addImage = addImage;
  };

  this.addPet = function(petObj) {
    console.log(petObj);

    let p = new Pet(petObj);    

    console.log(SERVER);

    return $http.post(SERVER.URL + '/pets', p, SERVER.CONFIG).then((res) => {
      console.log(res);
      $cookies.get('authToken', res.data.pet.auth_token);
      $cookies.put('pet_id', res.data.pet.id);
      SERVER.CONFIG.headers['Access-Token'] = res.data.pet.auth_token;
      $state.go('root.pet-reg');
    });   
  };

  function addImage (imageUrl, pets) {
      pet.picture = imageUrl;
      return $http.put(url + '/' + pet.objectId, pets, SERVER.CONFIG);
    }

};

PetRegService.$inject = ['$http', 'SERVER', '$cookies', '$state'];

export default PetRegService;

//to upload pet photos by owner
// let UploadService = function($http, FILESERVER) {
  
//   this.upload = upload;

//   function upload (file) {

//     let formData = new FormData();
//     formData.append('upload', file);
//     // formData.append('details', JSON.stringify({ name: 'Tim' }));

//     return $http.post(FILESERVER.URL, formData, FILESERVER.CONFIG);
//   }

// };

// UploadService.$inject = ['$http', 'FILESERVER'];

// export default UploadService;
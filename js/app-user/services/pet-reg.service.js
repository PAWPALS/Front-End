let PetRegService = function($http, SERVER, $cookies, $state) {

  // let url = SERVER.URL + 'pets';


  this.upload = upload;



  this.addPet = function(petObj, petImage) {


    let formData = new FormData();

    formData.append('name', petObj.name);
    formData.append('age', petObj.age);
    formData.append('breed', petObj.breed);
    formData.append('description', petObj.description);
    formData.append('picture', petImage);

    SERVER.CONFIG.headers['Content-Type'] = undefined;

    return $http.post(SERVER.URL + 'pets', formData,  SERVER.CONFIG);

    // ----

    // console.log(petObj);

    // let p = new Pet(petObj);    

    // console.log(SERVER);

    // return $http.post(SERVER.URL + '/pets', p, SERVER.CONFIG).then((res) => {
    //   console.log(res);
    //   $cookies.get('authToken', res.data.pet.auth_token);
    //   $cookies.put('pet_id', res.data.pet.id);
    //   SERVER.CONFIG.headers['Access-Token'] = res.data.pet.auth_token;
    //   $state.go('root.pet-reg');
    // });   
  };

  // Upload image
  function upload (file) {

    let formData = new FormData();
    formData.append('upload', file);

    return $http.post(SERVER.URL, formData, SERVER.CONFIG);
  }

};

PetRegService.$inject = ['$http', 'SERVER', '$cookies', '$state'];

export default PetRegService;


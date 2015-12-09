let addImage = function(PetRegService, UploadService) {
  
  return {

    restrict: 'E',
    replace: true,
    scope: {
      pet: '='
    },
  
    templateUrl: 'templates/app-user/pet-reg.tpl.html',
    link: function (scope, element, attrs) {
      element.on('submit', function () {

        let file = element.find('input')[0].files[0];
        UploadService.upload(file).then ((res) => {
          PetRegService.addImage(res.data.upload.file_url, scope.pet)
            .then( (res) => {
              
            });
        });

      });
    }
  };

};

addImage.$inject = ['PetRegService', 'UploadService'];

export default addImage;
import angular from 'angular';
import '../app-core/index';

import PetRegController from './controllers/pet-reg.controller';
import ProfileController from './controllers/profile.controller';
import PetRegService from './services/pet-reg.service';
import ProfileService from './services/profile.service';
import addImage from './directives/addImage.directive';
import UploadService from './services/upload.service';

angular
  .module('app.user', ['app.core'])
  .controller('PetRegController', PetRegController)
  .controller('ProfileController', ProfileController)
  .service('PetRegService', PetRegService)
  .service('ProfileService', ProfileService)
  .service('UploadService', UploadService)
  .directive('addImage', addImage)
;
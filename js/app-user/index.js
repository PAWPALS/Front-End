import angular from 'angular';
import '../app-core/index';

import PetRegController from './controllers/pet-reg.controller';
import ProfileController from './controllers/profile.controller';
import ProfileService from './services/profile.service';


angular
  .module('app.user', ['app.core'])
  .controller('PetRegController', PetRegController)
  .controller('ProfileController', ProfileController)
  .service('ProfileService', ProfileService)
;
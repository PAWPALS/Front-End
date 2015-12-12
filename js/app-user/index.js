import angular from 'angular';
import '../app-core/index';

import PetRegController from './controllers/pet-reg.controller';
import ProfileController from './controllers/profile.controller';
import SingleController from './controllers/single.controller';
import EditController from './controllers/edit.controller';

import PetRegService from './services/pet-reg.service';
import ProfileService from './services/profile.service';
import SingleService from './services/single.service';

angular
  .module('app.user', ['app.core'])
  .controller('PetRegController', PetRegController)
  .controller('ProfileController', ProfileController)
  .controller('SingleController', SingleController)
  .controller('EditController', EditController)

  .service('PetRegService', PetRegService)
  .service('ProfileService', ProfileService)
  .service('SingleService', SingleService)
;
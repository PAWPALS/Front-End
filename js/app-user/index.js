import angular from 'angular';
import '../app-core/index';


import UserRegController from './controllers/user-reg.controller';
import UserLoginController from './controllers/user-login.controller';
import PetRegController from './controllers/pet-reg.controller';
import ProfileController from './controllers/profile.controller';
import CommunityController from './controllers/community.controller';

angular
  .module('app.user', ['app.core'])
  .controller('UserRegController', UserRegController)
  .controller('UserLoginController', UserLoginController)
  .controller('PetRegController', PetRegController)
  .controller('ProfileController', ProfileController)
  .controller('CommunityController', CommunityController)
;
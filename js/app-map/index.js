import angular from 'angular';
import '../app-core/index';

import MapController from './controllers/map.controller';
import MapService from './services/map.service';
import LostService from './services/lost.service';

angular
  .module('app.map', ['app.core'])
  .controller('MapController', MapController)
  .service('MapService', MapService)
  .service('LostService', LostService)
;
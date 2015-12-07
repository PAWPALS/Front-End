import angular from 'angular';
import '../app-core/index';

import MapController from './controllers/map.controller';
import MapService from './services/map.service';
import mapDirective from './directives/map.directive';

angular
  .module('app.map', ['app.core'])
  .controller('MapController', MapController)
  .service('MapService', MapService)
  .directive('mapDirective', mapDirective)

 
;
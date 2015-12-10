import angular from 'angular';
import '../app-core/index';
import 'angular-google-maps';

import MapController from './controllers/map.controller';
import MapService from './services/map.service';
import mapDirective from './directives/map.directive';

angular
  .module('app.map', ['myAppModule', 'app.core', 'uiGmapgoogle-maps'])
  .controller('MapController', MapController)
  .service('MapService', MapService)
  .directive('mapDirective', mapDirective)
;
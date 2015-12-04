import angular from 'angular';
import '../app-core/index';


import MapController from './controllers/map.controller';
import mapDirective from './directives/map.directive';
import MapService from './services/map.service';



angular
  .module('app.map', ['app.core'])
  .controller('MapController', MapController)
  .directive('mapDirective', mapDirective)
  .service('MapService', MapService)
 
;
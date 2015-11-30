import angular from 'angular';
import '../app-core/index';


import MapController from './controllers/map.controller';


angular
  .module('app.map', ['app.core'])
  .controller('MapController', MapController)
 
;
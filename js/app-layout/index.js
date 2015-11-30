import angular from 'angular';
import 'angular-ui-router';

import '../app-core/index';

import HomeController from './controllers/home.controller';



angular
  .module('app.layout', ['app.core'])
  .controller('HomeController', HomeController)
  
;
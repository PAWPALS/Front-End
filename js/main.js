// Core files
import angular from 'angular';
import 'angular-ui-router';

// Sub modules
import './app-core/index';
import './app-layout/index';
import './app-user/index';
import './app-map/index';

angular
  .module('app', ['app.core', 'app.layout', 'app.user', 'app.map'])
  
;



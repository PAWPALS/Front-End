import angular from 'angular';
import 'angular-ui-router';
import 'angular-cookies';

import config from './config';

angular
  .module('app.core', ['ui.router', 'ngCookies'])
  .constant('SERVER', {
    URL: 'https://pawpals.herokuapp.com/',
    CONFIG: {
      headers: {}
    }
  })
  .config(config)  
;
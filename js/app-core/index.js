import angular from 'angular';
import 'angular-ui-router';
import 'angular-cookies';
import 'angular-google-maps';
import 'angular-simple-logger';
import _ from 'lodash';

window._ = _;

import config from './config';

angular
  .module('app.core', ['ui.router', 'ngCookies', 'uiGmapgoogle-maps', 'nemLogging'])
  .constant('SERVER', {
    URL: 'https://pawpals.herokuapp.com/',
    CONFIG: {
      headers: {}
    }
  })

  .config(config)
;


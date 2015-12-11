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
  .config(function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
      key: 'AIzaSyBx7KpGx1lDTlm5WqK8UMWA9CQDplQkXTU',
      v: '3.20', //defaults to latest 3.X anyhow
      libraries: 'weather,geometry,visualization'
    });
  })

;


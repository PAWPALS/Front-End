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
  .constant('glocURL', 'https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyBx7KpGx1lDTlm5WqK8UMWA9CQDplQkXTU')
  .constant('gmapURL', 'url')

;


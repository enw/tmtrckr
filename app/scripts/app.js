'use strict';

angular.module('tmtrkrApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/tsk', {
        templateUrl: 'views/tsk.html',
        controller: 'TskCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

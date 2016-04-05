(function() {
  'use strict';

  /**
    * @ngdoc overview
    * @name doraFrontApp
    * @description
    * # doraFrontApp
    *
    * Main module of the application.
   */
  angular.module('doraFrontApp', ['ngAnimate', 'ngAria', 'ngCookies', 'ngMessages', 'ngResource', 'ngRoute', 'ngSanitize', 'ngTouch']).config(function($routeProvider) {
    return $routeProvider.when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl',
      controllerAs: 'main'
    }).when('/about', {
      templateUrl: 'views/about.html',
      controller: 'AboutCtrl',
      controllerAs: 'about'
    }).otherwise({
      redirectTo: '/'
    });
  });

}).call(this);

//# sourceMappingURL=app.js.map

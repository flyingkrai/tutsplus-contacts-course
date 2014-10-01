/*global angular*/
(function () {
  'use strict';

  angular.module('ContactsApp.Contact', [
    'ngResource',
    'ContactsApp.Util',
    'ngRoute',
    'ngMessages'
    ])
    .config(function ($routeProvider, $locationProvider) {
      $routeProvider
        .when('/contacts', {
          controller: 'ListCtrl',
          templateUrl: 'views/contact/list.html'
        })
        .when('/contacts/new', {
          controller: 'NewCtrl',
          templateUrl: 'views/contact/new.html'
        });

      $locationProvider.html5Mode(true);
    });
})();

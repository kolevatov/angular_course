(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig ($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      template: ''
    })

    .state('categories', {
      url: '/categories',
      templateUrl: './src/templates/categories.template.html'
    })

    .state('itemDetail', {
      url: '/items/{itemName}',
      templateUrl: './src/templates/items.template.html',
      params: {
        itemName: null,
        itemCategory: null
      }
    });
}

})();

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
      templateUrl: './src/templates/categories.template.html',
      controller: 'CategoriesController as mainList',
      resolve: {
        categories: ['MenuDataService', function (MenuDataService) {
          return MenuDataService.getAllCategories();
        }]
      }
    })

    .state('itemDetail', {
      url: '/items/{itemName}',
      templateUrl: './src/templates/items.template.html',
      controller: 'ItemController as details',
      params: {
        itemName: null,
        itemCategory: null
      },
      resolve: {
        itemDetails: ['$stateParams','MenuDataService', function ($stateParams, MenuDataService) {
          return MenuDataService.getItemsForCategory($stateParams.itemName);
        }]
      }
    });
}

})();

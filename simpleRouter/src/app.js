(function (){
  angular.module('uiRouter', ['ui.router']);

  angular.module('uiRouter')
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig ($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('tab1', {
        url: '/tab1',
        templateUrl: './src/tab1.html'
      })

      .state('tab2', {
        url: '/tab2',
        templateUrl: './src/tab2.html'
      });

    $urlRouterProvider.otherwise('tab1');

  }

})();

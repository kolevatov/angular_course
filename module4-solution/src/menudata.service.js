angular.module('MenuApp')
.service('MenuDataService', MenuDataService);

// Service MenuDataService
MenuDataService.$inject = ['$http', 'categoriesUrl', 'itemsUrl'];
function MenuDataService($http, categoriesUrl, itemsUrl){
  var menu = this;

  menu.getAllCategories = function (){
    return $http({
      method: "GET",
      url: (categoriesUrl)
    });
  }

  menu.getItemsForCategory = function(categoryShortName){
    return $http({
      method: "GET",
      url: (itemsUrl),
      params: {
        "category": categoryShortName
      }
    });
  }
}

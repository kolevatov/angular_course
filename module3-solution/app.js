(function(){
'use strict'

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('apiURL', 'https://davids-restaurant.herokuapp.com/menu_items.json')
.directive('foundItems', FoundItems);

// directive
function FoundItems() {
  var ddo = {
    templateUrl: 'itemList.html',
    scope: {
      list: '<myList',
      'remove': '&onRemove'
    }
  };
  return ddo;
}

// controller NarrowItDownController
NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController (MenuSearchService){
  var itemList = this;
  itemList.searchText = '';
  itemList.menu = [];

  itemList.search = function(){
    itemList.menu = MenuSearchService.getMatchedMenuItems(itemList.searchText);
  }

  itemList.removeItem = function(itemIndex){
    itemList.menu = MenuSearchService.removeItem(itemIndex);
  }
}

// Service MenuSearchService
MenuSearchService.$inject = ['$http', 'apiURL'];
function MenuSearchService($http, apiURL){
  var menu = this;
  var filteredMenu = [];

  menu.removeItem = function(itemIndex){
      filteredMenu.splice(itemIndex, 1);
      return filteredMenu;
  }

  menu.getMatchedMenuItems = function(searchTerm){
    var promise = menu.getMenuItems();
    filteredMenu = [];

    promise.then(function (response) {
      var menuItems = response.data.menu_items;

      for (var i=0; i < menuItems.length; i++){
        if (menuItems[i].description.indexOf(searchTerm) > 0){
            filteredMenu.push(menuItems[i]);
        }
      }

      })
      .catch(function (error) {
        console.log(error.message);
      });
      return filteredMenu;
  }

  // call RESTApi, filter menu
  menu.getMenuItems = function(){
    var response = $http(
      {
      method: "GET",
      url: (apiURL)}
    );
    return response;
  }
}


})();

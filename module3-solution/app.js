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
  itemList.nothingFound = false;
  itemList.menu = [];

  itemList.search = function(){
    if (itemList.searchText === ''){
      itemList.nothingFound = true;
      itemList.menu = [];
    }else {
        MenuSearchService.getMatchedMenuItems(itemList.searchText)
        .then(function (response) {
          if (response.length != 0) {
            itemList.menu = response;
            itemList.nothingFound = false;
          } else {
            itemList.menu = [];
            itemList.nothingFound = true;
          }
        })
        .catch(function (error) {
          console.log(error.message);
        })

    }
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

  menu.getMatchedMenuItems = function(searchTerm) {
    return $http({
      method: "GET",
      url: (apiURL)
    }).then(function (result) {
      filteredMenu = []

      for (var i = 0; i < result.data.menu_items.length; i++) {
        if (result.data.menu_items[i].description.toLowerCase().indexOf(searchTerm) != -1) {
          filteredMenu.push(result.data.menu_items[i]);
        }
      }

      return filteredMenu;
    });
  }

}


})();

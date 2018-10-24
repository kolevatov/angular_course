(function(){
'use strict'

angular.module('ShoppingApp', [])
.controller('ShoppingListAddController', ShoppingListAddController)
.controller('ShoppingShowController', ShoppingShowController)
.service('ShoppingService', ShoppingService)
.directive('itemHeader', ItemHeader)
.directive('itemList', ItemList);

function ItemList(){
  var ddo = {
    templateUrl: 'list.html',
    scope: {
      title: '@title',
      list: '=myList'
    }
  };
  return ddo;
}

function ItemHeader(){
  var ddo = {
    template: 'Header list from Directive'
  };
  return ddo;
}

ShoppingListAddController.$inject = ['ShoppingService'];
function ShoppingListAddController(ShoppingService){
  var itemAdder = this;
  itemAdder.itemName = '';
  itemAdder.itemQuantity = '';

  itemAdder.addItem = function (){
    ShoppingService.addItem (itemAdder.itemName, itemAdder.itemQuantity);
  }
}

ShoppingShowController.$inject = ['ShoppingService'];
function ShoppingShowController(ShoppingService){
  var showList = this;
  showList.items = ShoppingService.show();
}

function ShoppingService(){
  var service = this;
  var items = [];

  service.addItem = function (name, quantity){
    var item = {
      name: name,
      quantity: quantity
    };

    items.push(item);
  }

  service.show = function (){
    return items;
  }
}
})();

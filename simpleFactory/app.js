(function(){
'use strict'

angular.module('ShoppingApp', [])
.controller('ShoppingListAddController', ShoppingListAddController)
.factory('ShoppingListFactory', ShoppingListFactory);

ShoppingListAddController.$inject = ['ShoppingListFactory'];
function ShoppingListAddController(ShoppingListFactory){
  var itemAdder = this;
  var shoppingService = ShoppingListFactory();

  itemAdder.itemName = '';
  itemAdder.itemQuantity = '';

  itemAdder.addItem = function (){
    shoppingService.addItem (itemAdder.itemName, itemAdder.itemQuantity);
  }

  itemAdder.items = shoppingService.show();
}

function ShoppingListFactory() {
  var factory = function () {
    return new ShoppingService();
  };

  return factory;
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

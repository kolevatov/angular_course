(function(){
'use strict'

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.controller('MessageController', MessageController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

var Message = false;

function MessageController(){
    parent = this;
    parent.startMessage = false;
    parent.finishMessage = false;
}

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){
  var buyList = this;

    buyList.items = ShoppingListCheckOffService.showBuy();
    buyList.buy = function (itemIndex){
      ShoppingListCheckOffService.buy(itemIndex);
      buyList.message = Message;
    };
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){
  var showList = this;
  showList.items = ShoppingListCheckOffService.showComplete();
}

function ShoppingListCheckOffService(){
  var service = this;
  var shoppingList = [{name:'Milk',quantity:'2'},
                      {name:'Donuts',quantity:'10'},
                      {name:'Cookies',quantity:'5'},
                      {name:'Chocolate',quantity:'2'},
                      {name:'Peanut Butter',quantity:'1'}
                    ];

  var completeList = [];

  service.showBuy = function(){
    return shoppingList;
  }

  service.showComplete = function(){
    return completeList;
  }

  service.buy = function(itemIndex){
    var item = shoppingList[itemIndex];
    completeList.push(item);
    shoppingList.splice(itemIndex, 1);

    parent.startMessage = true;
    if (shoppingList.length == 0){
      parent.finishMessage = true;
    }
  }

}
})();

(function(){
'use strict'

angular.module('ShoppingApp', [])
.controller('SimpleController', SimpleController)
.directive('itemHeader', ItemHeader)
.directive('buttonHeader', ButtonHeader);

function ItemHeader(){
  var ddo = {
    template: 'Simple Directive with controller'
  };
  return ddo;
}

function ButtonHeader(){
  var ddo = {
    templateUrl: './list.html'
  };
  return ddo;
}

function SimpleController(){
  var simple = this;
  simple.title = 'Do not push this button!';

  simple.push = function (){
    simple.title = 'You did it!'
  }
}
})();

(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemController', ItemController);


ItemController.$inject = ['MenuDataService', '$stateParams'];
function ItemController(MenuDataService, $stateParams) {
  var details = this;
  details.items = [];
  details.title = '';

  details.$onInit = function () {
    details.title = $stateParams.itemCategory;

    MenuDataService.getItemsForCategory($stateParams.itemName)
    .then(function (result) {
      details.items = result.data.menu_items;
    });

  };
}

})();

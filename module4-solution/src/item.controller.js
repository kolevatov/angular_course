(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemController', ItemController);


ItemController.$inject = ['$stateParams', 'itemDetails'];
function ItemController($stateParams, itemDetails) {
  var details = this;
  details.items = itemDetails;
  details.title = $stateParams.itemCategory;
}

})();

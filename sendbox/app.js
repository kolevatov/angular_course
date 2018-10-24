(function () {
'use strict';

angular.module('MsgApp', [])
.controller('MsgController', MsgController);

MsgController.$inject = ['$scope', '$filter'];
function MsgController($scope, $filter) {

  var output = $filter('lowercase');
  $scope.lowered = output("GIVE ME COOKIES NOW!");
  $scope.amount = .23;
}

})();

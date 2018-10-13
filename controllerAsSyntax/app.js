(function(){
'use strict'

angular.module('ControllerAsApp', [])
.controller('FirstController', FirstController)
.controller('SecondController', SecondController);

FirstController.$inject = ['$scope'];
function FirstController($scope){
  $scope.value = 'First!';
    }

function SecondController(){
  var child = this;
  child.value = 'Second!';
}
})();

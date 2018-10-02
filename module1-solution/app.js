(
  function(){
    'use strict'

    angular.module('LunchCheck', [])

    .controller('LunchCheckController', function($scope){
      $scope.itemList = '';
      $scope.messageColor = '';

      $scope.displayMessage = function () {
        if ($scope.itemList.length === 0){
          $scope.messageColor = 'red';
          $scope.message = 'Please enter data first';
        } else {
          var msgArray = $scope.itemList.split(',');

          if (msgArray.length <= 3){
            $scope.messageColor = 'green';
            $scope.message = 'Enjoy!';
          } else{
            $scope.messageColor = 'green';
            $scope.message = 'Too much!';
          }
        }

      }

      $scope.changeColor = function (){
        $scope.messageColor = '';
        $scope.message = '';
      }

    })
  }
)();

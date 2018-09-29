(
  function(){
    'use strict'

    angular.module('nameCalculator', [])

    .controller('nameController', function($scope){
      $scope.name = '';
      $scope.totalValue = 0;

      $scope.displayNumeric = function (){
        $scope.totalValue = calculateNumByString($scope.name);
      }

      function calculateNumByString (string){
        var total = 0;

        for (var i=0; i < string.length; i++){
          total += string.charCodeAt(i);
        }

        return total;
      }

    })
  }
)();

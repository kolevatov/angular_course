(function() {
"use strict";

angular.module('common')
.controller('SpinnerLoadingController', SpinnerLoadingController);

SpinnerLoadingController.$inject = ['$rootScope'];
function SpinnerLoadingController($rootScope){
  var ctrl = this;
  var spinnerActivateEvent = 'spinner:activate';

  ctrl.turnOn = function(){
    console.log('turnOn');
    $rootScope.$broadcast(spinnerActivateEvent, {on: true});
  }

  ctrl.turnOff = function(){
    console.log('turnOff');
    $rootScope.$broadcast(spinnerActivateEvent, {on: false});
  }
}


})();
